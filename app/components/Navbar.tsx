import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Link href="/">
                <h1>Books Collection</h1>
            </Link>
            <section>
                <Link style={{ margin: '0 5px' }} href="/lists">Best sellers Lists</Link>
                <Link style={{ margin: '0 5px' }} href="/best-sellers">NYT Best sellers</Link>
            </section>
        </nav>
    );
};

export default Navbar;