import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap"
});

export const metadata = {
  title: "Infopyx | AI Solutions, Automations, and Web Engineering",
  description:
    "Infopyx designs and ships AI products, workflow automations, and custom web software for businesses that need dependable technical delivery."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSerif.variable}>{children}</body>
    </html>
  );
}
