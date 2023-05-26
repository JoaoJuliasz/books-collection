'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import glass from '@/public/glass.svg'
import styles from './searchField.module.scss'
import { toast } from 'react-hot-toast';


const SearchField = () => {

    const [searchField, setSerchField] = useState<string>("")
    const [autocompleteItems, setAutocompleteItems] = useState<selectedBook[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const node = useRef<HTMLDivElement | null>(null)

    console.warn(loading)

    const triggerSearchedBooks = async () => {
        if (searchField) {
            setLoading(true)
            try {
                const res = await fetch(`http://localhost:3000/api/filtered?title=${searchField}`)
                const data = await res.json()
                setAutocompleteItems(data)
            } catch (error) {
                toast.error("Something went wrong!")
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

    const handleInputFocus = () => {
        triggerSearchedBooks()
    }

    const handleClickOutSide = (e: any) => {
        if (node.current?.contains(e.target)) {
            return
        }

        setAutocompleteItems([])
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            triggerSearchedBooks()
        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [searchField])

    useEffect(() => {
        if (autocompleteItems.length > 0) {
            document.addEventListener("mousedown", handleClickOutSide)
        } else {
            document.removeEventListener("mousedown", handleClickOutSide)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [autocompleteItems])

    return (
        <div ref={node} className={styles.container}>
            <div className={`${styles.inputContainer} ${loading ? styles.loading : ''}`}>
                <Image src={glass} alt="glass" className={styles.icon} />
                <input type="text" onChange={e => setSerchField(e.target.value)}
                    className={styles.input} onFocus={handleInputFocus} placeholder="Search for a book!" />
                {loading ? <span className={styles.loader} /> : null}
            </div>
            {autocompleteItems.length > 0 ?
                (<div className={styles.autocomplete}>
                    {autocompleteItems.map((item, index) => (
                        <Link href={`/lists/${item.ranks_history[0]?.list_name}/${item.title}`}
                            onClick={() => setAutocompleteItems([])}
                            key={index} className={styles.item}>
                            <h4>{item.title}</h4> <span>{item.ranks_history[0]?.list_name}</span>
                        </Link>
                    ))
                    }
                </div>) :
                null
            }
        </div>
    );
};

export default SearchField;