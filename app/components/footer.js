export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-container">
            <div>
                <p>© {year} MyArdena — Crafted with care.</p>
            </div>
        </footer>
    );
}