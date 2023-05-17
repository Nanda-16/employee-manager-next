import Header from '@/components/dashboard/header'

export const metadata = {
  title: 'Employee Mananager',
  description: 'Employee Manangement application',
}

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}