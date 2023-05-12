import Header from '@/components/dashboard/header'
import { Inconsolata } from 'next/font/google'

const yanoneKaffeesatz = Inconsolata({ subsets: ['latin'] })
export const metadata = {
  title: 'Home - Employee Mananager',
  description: 'Employee Manangement application',
}

export default function HomeLayout({ children }) {
  return (
    <>
      <div className={yanoneKaffeesatz.className}>
        <Header />
        {children}
      </div>
    </>
  )
}