import { useSession } from "next-auth/react"

function Foo() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <></>
  )
}

export default Foo
