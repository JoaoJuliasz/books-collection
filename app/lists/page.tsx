import getBestSellersList from '@/lib/getBestSellersList';
import React from 'react';
import Item from './components/Item';

const Lists = async () => {

    const listData: Promise<BestSellerList> = getBestSellersList()
    const list = await listData

    return (
        <main>
            <h1>This is the New York Times Best Sellers List</h1>
            {
                list.results?.map(item => {
                    return <Item key={item.list_name_encoded} listItem={item} />
                })
            }
        </main>
    );
};

export default Lists;