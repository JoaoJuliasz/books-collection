'use client'
import Link from 'next/link';
import Image from 'next/image';

import glass from '@/public/glass.svg'

import styles from './searchField.module.scss'

import useSearchBooks from '@/hooks/searchField/useSearchBooks';
import useAutocomplete from '@/hooks/searchField/useAutocomplete';
import AutocompleteLoading from './AutocompleteLoading';


const SearchField = () => {

    const { searchField, autocompleteItems, loading, triggerSearchedBooks, setSerchField, setAutocompleteItems } = useSearchBooks()

    const { node, handleInputFocus } = useAutocomplete({ searchField, autocompleteItems }, { setAutocompleteItems, triggerSearchedBooks })

    return (
        <div ref={node} className={styles.container}>
            <div className={`${styles.inputContainer} ${loading ? styles.loading : ''}`}>
                <Image src={glass} alt="glass" className={styles.icon} />
                <input type="text" onChange={e => setSerchField(e.target.value)}
                    className={styles.input} value={searchField}
                    onFocus={handleInputFocus}
                    placeholder="Search for a book!" />
            </div>
            {autocompleteItems.length > 0 && !loading ?
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

            {loading ?
                <AutocompleteLoading />
                : null}
        </div>
    );
};

export default SearchField;