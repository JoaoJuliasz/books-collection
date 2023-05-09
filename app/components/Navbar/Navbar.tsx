import Link from 'next/link';

import logo from '@/public/logo.svg'
import Image from 'next/image';
import SearchField from './SearchField/SearchField';

const Navbar = () => {

    return (
        <nav style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', padding: '1.2em 2em', background: '#6b6a6a99',
            boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
            color: '#fff', position: 'fixed'
        }}>
            <section style={{ display: 'flex', width: '65%' }}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
                <SearchField />
            </section>
            <section style={{ display: 'flex' }}>
                <div>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/lists">Lists</Link>
                    <Link style={{ margin: '0 0.3em', fontSize: '1.2rem' }} href="/best-sellers">Best Sellers</Link>
                </div>
                <div>
                    <Link style={{ fontSize: '1.2rem', margin: '0 1em' }} href="/">Login</Link>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;