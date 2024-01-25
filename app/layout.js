import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar/navbar'
import Footer from "@/components/Footer/footer"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'uiaftersex',
  description: 'An open-source intuitive laboratory that showcases uniquely crafted user interfaces, interactions & components.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <hr className='divder'></hr>
        <Footer />
      </body>
    </html>
  )
}
