'use client'

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import glass from '@/public/glass.svg'

import styles from './searchField.module.scss'


const SearchField = () => {

    const [searchField, setSerchField] = useState<string>("")
    const [autocompleteItems, setAutocompleteItems] = useState<any>([])


    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchField) {
                const res = await fetch(`http://localhost:3000/api/filtered?title=${searchField}`)
                const data = await res.json()
                setAutocompleteItems(data)
            }
        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [searchField])

    console.warn(autocompleteItems.length > 0)

    return (
        <div className={styles.container}>
            <Image src={glass} alt="glass" className={styles.icon} />
            <input type="text" onChange={e => setSerchField(e.target.value)} className={styles.input} />
            {autocompleteItems.length > 0 ?
                (<div className={styles.autocomplete}>
                    {autocompleteItems.map((item) => (
                        <>
                            <h4>{item.title}</h4> <span>{item.ranks_history[0]?.list_name}</span>
                        </>
                    ))
                    }
                </div>) :
                null
            }
        </div>
    );
};

export default SearchField;