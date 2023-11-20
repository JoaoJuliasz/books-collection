import React from 'react';
import Item from './components/Item/Item';
import getBestSellersList from '@/lib/getBestSellersList';

import styles from './list.module.scss';

export const metadata = {
    title: 'Best Sellers List',
}

const Lists = async () => {

    const listData: Promise<BestSellerList> = getBestSellersList()
    const list = await listData
    return (
        <main className={styles.container}>
            <h1>This is the New York Times Best Sellers List</h1>
            <div className={styles.wrapper}>
                {
                    list.results?.map(item => {
                        return <Item key={item.list_name_encoded} listItem={item} />
                    })
                }
            </div>
        </main>
    );
};

export default Lists;