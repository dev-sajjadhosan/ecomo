import Header from '@/components/custom/header'
import { Outlet } from 'react-router-dom'

export default function RootLay() {
  return (
    <div className='p-5'>
      <Header />
      <div className="mt-3"></div>
      <Outlet />
    </div>
  )
}
