"use server"
import prisma from "@/lib/db"
import { unstable_cache } from "next/cache"

//now this number of coins will be cache even after the refresh so this will reduces the number of db calls
export const getUserCoins = unstable_cache(async (user_id: string) => {
    return await prisma.user.findUnique({
        where:{
            id: Number(user_id)
        },
        select: {
            coins: true
        }
    }) 
},
["usercoins"],
{revalidate: 20*20, tags: ["usercoins"]}
)