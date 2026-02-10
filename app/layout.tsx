import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solvix Technologies",
  description: "Innovative technology solutions for your business",
  icons: {
    icon: [
      {
        url: "/icon.svg?v=4",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
