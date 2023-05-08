'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import logo from '@/public/logo.svg'
import glass from '@/public/glass.svg'
import Image from 'next/image';

const Navbar = () => {

    const [searchField, setSerchField] = useState<string>("")

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchField) {
                const res = await fetch(`http://localhost:3000/api/filtered?title=${searchField}`)
                const data = await res.json()
                console.warn(data)
            }
        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [searchField])

    return (
        <nav style={{
            display: 'flex', alignItems: 'center',
            width: '100%', padding: '1.2em 2em', background: 'rgba(86, 86, 86, 0.6)',
            boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
            color: '#fff'
        }}>
            <section style={{ display: 'flex', width: '65%' }}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <div style={{
                    display: 'flex', width: '60%', margin: '0 1em', alignItems: 'center', background: '#d9d9d9',
                    borderRadius: '2px'
                }}>
                    <Image src={glass} alt="glass" style={{ margin: '0 0.3em' }} />
                    <input style={{
                        width: '100%', background: 'transparent', border: 'none', outline: 'none',
                        fontSize: '1rem', padding: '7px', color: '#888'
                    }} type="text" onChange={e => setSerchField(e.target.value)} />
                </div>
            </section>
            <section style={{ display: 'flex' }}>
                <div>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/lists">Lists</Link>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/best-sellers">Best Sellers</Link>
                </div>
                <div>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/">Login</Link>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;