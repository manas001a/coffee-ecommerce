import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar/Navbar";
import Cart from "@/components/Cart/Cart";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Brew Haven | Premium Artisan Coffee",
  description: "Discover the world's finest single-origin coffees, expertly roasted and delivered fresh to your door. Brew Haven — where every cup tells a story.",
  keywords: "coffee, artisan coffee, single origin, espresso, whole beans, coffee shop, premium coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <Cart />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
