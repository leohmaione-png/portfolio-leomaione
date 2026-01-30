import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter-variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const nanumGothic = localFont({
  src: [
    {
      path: "../../public/fonts/nanum-gothic-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nanum-gothic-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/nanum-gothic-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-gothic",
});

const nanumMyeongjo = localFont({
  src: [
    {
      path: "../../public/fonts/nanum-myeongjo-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/nanum-myeongjo-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/nanum-myeongjo-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-myeongjo",
});

export const metadata: Metadata = {
  title: "Leo Maione - Product Designer",
  description: "Portfolio of Leo Maione, a Product Designer based in Brazil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${nanumGothic.variable} ${nanumMyeongjo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
