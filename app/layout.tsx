import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="site-container">
          <div className="content">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
