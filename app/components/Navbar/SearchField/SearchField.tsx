'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import glass from '@/public/glass.svg'
import styles from './searchField.module.scss'
import useSearchBooks from '@/app/hooks/searchField/useSearchBooks';


const SearchField = () => {

    const { searchField, autocompleteItems, loading, triggerSearchedBooks, setSerchField, setAutocompleteItems } = useSearchBooks()

    const node = useRef<HTMLDivElement | null>(null)

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