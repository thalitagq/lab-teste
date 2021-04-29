import { Container } from "@material-ui/core";
import TopBarNavegation from "../components/TobBarNavegation";
import UsersList from "../components/UsersList";

export default function Followers(){
  return(
    <div>
      <TopBarNavegation/>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <UsersList/>
      </Container>
    </div>
  )
}