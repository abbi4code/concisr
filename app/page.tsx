import Footer from "@/components/heropg/Footer";
import HeroSection from "@/components/heropg/HeroSection";
import Navbar from "@/components/heropg/Navbar";
import Pricing from "@/components/heropg/Pricing";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/opt";

export default async function Home() {
  //this hook provided by nextauth itself
  const session:CustomSession | null= await getServerSession(authOptions)
  console.log("session",session)
  return (
   <>
   {JSON.stringify(session)}
   <Navbar user={session?.user}/>
   <HeroSection/>
   <Pricing user={session?.user}/>
   <Footer/>
   </>
  );
}
