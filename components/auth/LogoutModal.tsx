"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { signOut } from "next-auth/react"
  
import React, { SetStateAction } from 'react'


export default function LogoutModal({open, setOpen}:{open: boolean, setOpen:Dispatch<SetStateAction<boolean>>}) {

    const handleLogout = () => {
        signOut({
            callbackUrl: "/",
            redirect: true
        })
    }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
    {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}
