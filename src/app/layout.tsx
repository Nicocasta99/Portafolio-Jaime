import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaimeandrescastano.vercel.app"),
  title: {
    default: "Jaime Andrés Castaño | Gerencia de Proyectos, Operaciones & Supply Chain",
    template: "%s · Jaime Andrés Castaño",
  },
  description:
    "Portafolio profesional de Jaime Andrés Castaño Gómez, Ingeniero Industrial especialista en Gerencia de Proyectos, con trayectoria en producción, planeación y Supply Chain.",
  keywords: [
    "Jaime Andrés Castaño",
    "Gerencia de Proyectos",
    "Jefe de Producción",
    "Supply Chain",
    "S&OP",
    "Planeación de Producción",
    "PMO",
    "Power BI",
    "Mejora Continua",
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Jaime Andrés Castaño | Gerencia de Proyectos, Operaciones & Supply Chain",
    description:
      "Ingeniero Industrial especialista en Gerencia de Proyectos · Operaciones · Planeación & Supply Chain.",
    siteName: "Jaime Andrés Castaño",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
