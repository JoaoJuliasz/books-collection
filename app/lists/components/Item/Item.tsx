import React from 'react';
import Link from 'next/link';

import style from './item.module.scss';

type Props = {
    listItem: ListItem
}

const Item = ({ listItem }: Props) => {
    return (
        <div className={style.item}>
            <Link href={`/lists/${listItem.list_name_encoded}`}>{listItem.display_name}</Link>
        </div>
    );
};

export default Item;