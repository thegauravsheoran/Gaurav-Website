import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Gaurav Sheoran",
  description: "Gaurav's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
