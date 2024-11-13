import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/opt'
import { getServerSession } from 'next-auth'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import { getUserCoins } from '@/dbactions/getActions'
import InputUrl from '@/components/dashboard/InputUrl'

export default async function page() {
    const session: CustomSession | null = await getServerSession(authOptions)

    const coins = await getUserCoins(session?.user?.id)
  return (
   <>
   <DashboardNavbar user={session?.user!} userCoins={coins}/>
   <InputUrl/>
   </>
  )
}
