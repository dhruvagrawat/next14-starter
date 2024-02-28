import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "/home/anto/code/projects/next14-starter/src/components/Navbar.jsx"
import Footer from "/home/anto/code/projects/next14-starter/src/components/Footer/Footer.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div class="Container">
        <Navbar />
        {children}
        <Footer />
      </div>
      
      </body>
    </html>
  )
}