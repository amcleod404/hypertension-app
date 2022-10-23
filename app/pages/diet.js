
import LoginButton from '../components/LoginButton'
import Nav from '../components/Nav'
import { SessionProvider } from "next-auth/react"

function Diet({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Nav highlight={"Diet"} {...pageProps}></Nav>
      <LoginButton {...pageProps} />
      <h2>Diet</h2>
    </SessionProvider>

  )
}

export default Diet
