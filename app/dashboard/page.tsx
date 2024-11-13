import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/opt'
import { getServerSession } from 'next-auth'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'

export default async function page() {
    const session: CustomSession | null = await getServerSession(authOptions)
  return (
   <>
   <DashboardNavbar user={session?.user!} userCoins={null}/>
   </>
  )
}
