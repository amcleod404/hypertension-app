import "../styles/globals.css"
import { SessionProvider } from "next-auth/react"
import Nav from "../components/Nav"
import LoginButton from "../components/LoginButton"

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Nav {...pageProps} />
      <LoginButton {...pageProps} />
      <Component {...pageProps}/>
    </SessionProvider>
  )
}

export default App
