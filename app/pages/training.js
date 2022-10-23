
import LoginButton from '../components/LoginButton'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"

function Training({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Nav highlight={"Training"} {...pageProps}></Nav>
      <LoginButton {...pageProps} />
      <div> 
      <h2>Training</h2>
      </div>
    </SessionProvider>

  )
}

export default Training
