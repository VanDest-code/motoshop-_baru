import './globals.css';
import type { Metadata } from 'next';
import { Inter, Creepster, Nosifer, Eater } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const creepster = Creepster({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
  display: 'swap',
});
const nosifer = Nosifer({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nosifer',
  display: 'swap',
});
const eater = Eater({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-eater',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DarkMoto Parts | Motorcycle Parts with a Horror Twist',
  description: 'Premium motorcycle spare parts with a horror theme. Find the best quality parts for your ride with our gothic-inspired online store.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${creepster.variable} ${nosifer.variable} ${eater.variable} bg-[#121212] text-gray-100 font-sans`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}