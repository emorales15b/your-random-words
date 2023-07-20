import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Script from 'next/script'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Random Words: Unleash Creativity with Word Randomizer',
  description: 'Ignite your creativity with our word randomizer! Discover a universe of endless possibilities as we shuffle your word list with a single click. Unleash fresh ideas, enhance brainstorming sessions, and add excitement to your writing. Embrace the power of randomness today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className}> */}
      <head>
        <link rel='icon' href='/favicon.ico'/>
        <meta name="keywords" content="random words, word randomizer, creative writing tool, brainstorming aid, word list generator, word shuffler, language inspiration, spontaneous word choices" />
      </head>
      <body className="bg-[url(/img/background.jpg)] bg-cover bg-no-repeat bg-center h-screen">
        <Navbar/>
        {children}
        <div>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-GJFB5T4VQ4" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-GJFB5T4VQ4');
            `}
          </Script>
        </div>
      </body>
    </html>
  )
}
