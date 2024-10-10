import type { Metadata } from "next";
import "./globals.css"; // Certifique-se de que isso é importado corretamente
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  display: "swap", // Adicione essa linha
});

export const metadata: Metadata = {
  title: "game.store",
  description: "a versão mais básica da loja de jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
