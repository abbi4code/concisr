import React, { Suspense, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { CustomUser } from '@/app/api/auth/[...nextauth]/opt'
import UserAvatar from './UserAvatar'
import dynamic from 'next/dynamic'

const LogoutModal = dynamic(()=> import("../auth/LogoutModal"))

  

export default function ProfileDrop({user}: {user: CustomUser}) {

    const [open, setOpen] = useState(false)
  return (
 <>
 {
    open && <Suspense>
        <LogoutModal open={open} setOpen={setOpen}/>
    </Suspense>
 }
    <DropdownMenu>
  <DropdownMenuTrigger>
    <UserAvatar image={user?.image | undefined} name={user?.name} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Transactions</DropdownMenuItem>
    <DropdownMenuItem>Coins Spend</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setOpen(true)}>Logout</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu></>

  )
}
