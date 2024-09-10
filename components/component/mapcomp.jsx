import React from 'react';
import dynamic from 'next/dynamic';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const ClientSideMap = dynamic(() => import('./ClientSideMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

export function Mappage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 w-screen items-left h-[8vh] ">
        <div className="max-w-4xl flex items-left justify-between">
          <div className="flex items-left gap-4">
            <Avatar className="w-12 h-12 border rounded-lg">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">Your <Link href="/" className="hover:underline hover:text-customyello transition-colors duration-300 ease-in-out">Renta</Link> Account</h1>
          </div>
        </div>
      </header>
      <div className="flex flex-row h-[92vh]">
        <aside className="flex flex-col items-left justify-between w-fit px-4 md:px-6 border-b bg-primary text-primary-foreground py-2 md:py-12">
          <nav className="flex flex-col items-left justify-between h-fit w-fit gap-4 sm:gap-6">
            <div className="flex flex-col md:flex items-left gap-4 w-fit">
              <Link href="#" className="text-background drop-shadow-glow hover:text-customyello transition-colors" prefetch={false}>
                Account Details
              </Link>
              <Link href="/User_Account/User_Rev" className="text-muted-foreground hover:text-customyello transition-colors" prefetch={false}>
                My Ratings & Reviews
              </Link>
              <Link href="/User_Account/User_Prev" className="text-muted-foreground hover:text-customyello transition-colors" prefetch={false}>
                Previous Bookings
              </Link>
            </div>
          </nav>
        </aside>
        <main className="flex-1 bg-background py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen max-h-[1vh] mx-auto grid grid-rows-2 sm:grid-rows-2 gap-6">
            <ClientSideMap />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Mappage;