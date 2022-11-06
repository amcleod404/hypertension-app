import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import Nav from "../components/Nav"
import NotificationCard from "../components/NotificationCard"

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Nav {...pageProps} />
      <Component {...pageProps} />
      <NotificationCard {...pageProps} />
    </SessionProvider>
  )
}

export default App
