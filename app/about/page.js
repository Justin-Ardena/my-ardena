import Image from "next/image";

export default function aboutPage() {
  return (
    <section className="card">
      <h1 style={{ margin: 0 }}>About</h1>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Image
          src="/image/bomb.png"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-md object-contain"
        />
        <p className="muted">This is the about page.</p>
      </div>
    </section>
  );
}