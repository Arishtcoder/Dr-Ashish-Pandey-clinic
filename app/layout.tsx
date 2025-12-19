import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Asidebar from "@/components/Asidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Mobile sidebar */}
        <Asidebar />

        {/* Desktop / Tablet navbar */}
        <Navbar />

        <main className="page-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
