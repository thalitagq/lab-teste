
import { Container } from "@material-ui/core";
import TopBar from "../components/TopBar";
import User from "../components/User";

export default function Home(){
  
  return(
    <div>
      <TopBar />
      <Container maxWidth="md" style={{padding: 0}}>
        <User />
      </Container>
    </div>
  )
}