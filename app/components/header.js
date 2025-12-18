import Link from 'next/link';

export default function Header() {
    return (
        <header className="site-container">
            <div className="logo">
                <Link href="/">MyArdena</Link>
            </div>

            <nav className="nav" aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}