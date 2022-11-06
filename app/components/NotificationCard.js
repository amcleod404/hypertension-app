import Link from "next/link"
import { useSession } from "next-auth/react"
import { useState, setState } from "react"

export default function Nav() {
    const { data: session } = useSession()
    return (
      <>
        <div class="notification-card-container">
            <span onClick={console.log('Dismissing')}>&times;</span>
            <h1>Hey, Ian!</h1>
            <p>Just wanted to let you know you've got an appointment coming up in 3 days!</p>
        </div>
      </>
    )
  }