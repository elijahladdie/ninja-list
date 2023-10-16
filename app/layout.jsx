
import './globals.css';
import { Rubik } from 'next/font/google';

// components
import NavBar from './components/Navbar';
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: ' Dojo help Desk',
  description: 'Developed by laddie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
       <NavBar/>
        {children}</body>
    </html>
  )
}
