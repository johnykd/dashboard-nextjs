import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log("check", inter);
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}