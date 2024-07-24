// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'


const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400'
})

export default function Layout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Basavaraj Patil - Full Stack Web Developer</title>
        <meta name="description" content="Basavaraj Patil is a skilled web developer specializing in modern, responsive, and user-friendly websites and applications. Proficient in Python, Java, JavaScript, and various front-end and back-end technologies, with experience in cloud platforms and DevOps tools." />
        <link rel="canonical" href="https://www.basavarajpatil.me/" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2FPJ7J5DYL"></script>
        <script>
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2FPJ7J5DYL');
        `}
        </script>
      </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}