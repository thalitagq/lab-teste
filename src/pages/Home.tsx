
import { lazy } from "react";
import { useAuth } from "../contexts/auth";

const TopBar = lazy(() => import('../components/TopBar'))
const User = lazy(() => import('../components/User'))
const Container = lazy(() => import('@material-ui/core/Container'))

export default function Home(){
  
  const {user} = useAuth()

  return(
    <>
      <TopBar isHome={true} login={user?.login as string} avatar_url={user?.avatar_url as string}/>
      <Container maxWidth="md" style={{padding: 0}}>
        <User user={user}/>
      </Container>
    </>
  )
}