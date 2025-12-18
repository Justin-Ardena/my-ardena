import Image from "next/image";

export default function Home() {
  return (
    <section className="card">
      <h1 style={{ fontSize: '2rem', margin: 0 }}>Welcome to My Simple Page Baby</h1>
      <p className="muted" style={{ marginTop: '0.75rem' }}>
        A small site demo with a clean, modern design — built with Next.js and Tailwind.
      </p>
    </section>
  );
}
