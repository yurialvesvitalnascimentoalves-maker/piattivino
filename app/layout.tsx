import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Piatti & Vino | Gastronomia contemporânea",
  description:
    "Uma experiência de gastronomia contemporânea, sabores requintados e harmonizações memoráveis.",
  openGraph: {
    title: "Piatti & Vino",
    description: "Sabores que ficam na memória.",
    images: ["/images/piatti-vino-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
