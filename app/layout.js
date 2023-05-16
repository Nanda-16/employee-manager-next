import Header from '@/components/login/header'
import './globals.css'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })
export const metadata = {
  title: 'Employee Mananager',
  description: 'Employee Manangement application',
}

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}