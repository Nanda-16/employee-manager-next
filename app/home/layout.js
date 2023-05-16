import Header from '@/components/dashboard/header'

export const metadata = {
  title: 'Home - Employee Mananager',
  description: 'Employee Manangement application',
}

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}