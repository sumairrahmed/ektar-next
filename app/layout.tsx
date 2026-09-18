import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ektar — Digital security, engineered for banks",
  description:
    "Ektar secures banking's digital channels — device-bound authentication, in-app attestation, SIM binding, cryptographic document signing, and product distribution — built by ex-bankers who know where the gaps are.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Topbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ScrollReveal />
        <AgentationProvider />
      </body>
    </html>
  );
}
