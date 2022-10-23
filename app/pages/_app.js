import "../styles/globals.css"
import LoginButton from '../components/LoginButton'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Nav {...pageProps}></Nav>
        <LoginButton {...pageProps} />
    </SessionProvider>

  )
}

export default App
