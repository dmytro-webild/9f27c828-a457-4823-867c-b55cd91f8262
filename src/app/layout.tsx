import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Urban Palate | The City\'s Premier Food Court',
  description: 'Discover a premium culinary collection featuring the best local and global cuisines at Urban Palate.',
  openGraph: {
    "title": "Urban Palate",
    "description": "The city's finest dining collective.",
    "siteName": "Urban Palate",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Urban Palate"
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
