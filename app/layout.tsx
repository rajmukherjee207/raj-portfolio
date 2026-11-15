import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Mono } from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const seoData = {
  title: "Raj Mukherjee| Senior Full Stack Developer",
  siteName: "Raj Mukherjee Portfolio",
  author: "Raj Mukherjee",
  description:
    "Web Developer with 1+ years of experience building backend systems, APIs, ETL pipelines, and web applications across healthcare, e-commerce, and real-time products using Python, Django, FastAPI, Node.js, React, AWS, and GCP.",
  keywords: [
    "Raj Mukherjee",
    "rajmukherjee207",
    "Web Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Data Engineer",
    "ETL Pipelines",
    "Healthcare Data Workflows",
    "High Throughput Event Processing",
    "Express.js",
    "MongoDB",
    "FastAPI Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Cloud Engineer",
    "AWS",
    "GCP",
    "Apache Airflow",
    "Apache Spark",
    "BigQuery",
    "ClickHouse",
    "Portfolio",
  ],
  url: "https://github.com/rajmukherjee207",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
};

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),
  title: seoData.title,
  description: seoData.description,
  applicationName: seoData.siteName,
  authors: [{ name: seoData.author, url: seoData.url }],
  creator: seoData.author,
  publisher: seoData.author,
  keywords: seoData.keywords,
  other: {
    title: seoData.title,
  },
  alternates: {
    canonical: seoData.url,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.url,
    siteName: seoData.siteName,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        width: 460,
        height: 460,
        alt: seoData.author,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
    creator: "@rajmukherjee207",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-terminal-bg text-terminal-text antialiased">
        {children}
      </body>
    </html>
  );
}
