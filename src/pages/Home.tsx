
import { Container } from "@material-ui/core";
import TopBar from "../components/TopBar";
import User from "../components/User";
import { useAuth } from "../contexts/auth";

export default function Home(){
  
  const {user} = useAuth()

  return(
    <div>
      <TopBar isHome={true} login={user?.login as string} avatar_url={user?.avatar_url as string}/>
      <Container maxWidth="md" style={{padding: 0}}>
        <User user={user}/>
      </Container>
    </div>
  )
}