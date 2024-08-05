import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { SOCIAL } from "@/constants/static_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikhilesh Portfolio",
  description: "Explore the portfolio of Nikhilesh, a proficient full stack developer skilled in JavaScript, ReactJS, and NodeJS. Discover innovative projects such as Invigilator, Get Me A Chai, BlogWiz, Musically, and more.",
  keywords: "Full Stack Developer,NextJS, ReactJS, NodeJS, MongoDB, Tailwind CSS,JavaScript ,TypeScript, Developer Portfolio, Project Portfolio, Invigilator, Get Me A Chai, BlogWiz, Musically, Money Tracker, Web Development, Framer Motion, EmailJS",
  url: "https://nikhilesh.vercel.app/",
  image: "https://drive.google.com/file/d/17HI5ukcbUwDivVeXmO5UNmozjmfCAe9R/view?usp=drive_link"
};

const sameAsLinks = SOCIAL.map(({ link }) => link);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:url" content={metadata.url} />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Nikhilesh" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="canonical" href={metadata.url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Nikhilesh",
            "url": metadata.url,
            "image": metadata.image,
            "sameAs": sameAsLinks,
            "jobTitle": "Full Stack Developer",
            "description": "Looking for internships, remote work, freelance work, and collaboration opportunities.",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "VNR VJIET Hyderabad"
            },
            "knowsAbout": [
              "Full Stack Development",
              "Frontend Developer",
              "Backend Developer",
              "NextJS",
              "ReactJS",
              "NodeJS",
              "MongoDB",
              "Tailwind CSS",
              "JavaScript",
              "TypeScript",
              "Framer Motion",
              "EmailJS"
            ]
          })}
        </script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
