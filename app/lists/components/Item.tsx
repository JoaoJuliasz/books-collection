import Link from 'next/link';
import React from 'react';

type Props = {
    listItem: ListItem
}

const Item = ({ listItem }: Props) => {
    return (
        <div>
            <Link style={{margin: '5px'}} href={`/lists/${listItem.display_name}`}>{listItem.display_name}</Link>
        </div>
    );
};

export default Item;