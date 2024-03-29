import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <Header/>
                    {children}
                </main>
            </body>
        </html>
    );
}
