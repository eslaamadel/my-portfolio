import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eslam Adel Portfolio",
  description:
    "I am a creative and detail-oriented UX/UI developer passionate about designing intuitive, user-centered digital experiences. Proficient in the latest design...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col w-full overflow-x-hidden">
      <head>
        {/* Script for immediate theme handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark'; // Default to dark
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} relative overflow-x-clip`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
