import Cabecalho from "@/Components/Cabecalho/Cabecalho";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Worlds in Collision",
  description: "Generated by create next app",
};

export const viewport = {
  width:"device-width",
  initial_scale:1.0,
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}