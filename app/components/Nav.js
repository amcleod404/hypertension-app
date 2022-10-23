import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, setState } from "react"

export default function Nav() {
    const { data: session } = useSession()
    const [highlight, setHighlight] = useState("Home")
    return (
      <>
        <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
  
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            {/* <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img>
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"></img> */}
            <img src="logo-color.svg" class="block h-8 w-auto"></img>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
                <Link href="/">
                    <a onClick={() => setHighlight("Home")} class={highlight == "Home" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium": "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" } aria-current="page">Home</a>
                </Link>
                <Link href="/appointments">
                <a onClick={() => setHighlight("Appointments")} class={highlight == "Appointments" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium": "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" } aria-current="page">Appointments</a>
                </Link>
                <Link href="/training">
                <a onClick={() => setHighlight("Training")} class={highlight == "Training" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium": "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" } aria-current="page">Training</a>
                </Link>
                <Link href="/diet">
                <a onClick={() => setHighlight("Diet")} class={highlight == "Diet" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium": "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" } aria-current="page">Diet</a>
                </Link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="relative ml-3" style={{display:  session ? "block" : "none" }}>
        <p class="text-white px-3 py-2 rounded-md text-sm font-medium">{session ? session.user.name : ""}</p>
        </div>
        <img src={session && session.user.image} style={{display: session ? "block" : "none", height: 30, width: 30, borderRadius: 50}}/>
          <div class="relative ml-3">
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
            <a class="text-white px-3 py-2 rounded-md text-sm font-medium">{session ? "Sign Out" : "Sign in"}
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  </nav>
      </>
    )
  }