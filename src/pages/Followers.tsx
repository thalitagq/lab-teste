import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import TopBarNavegation from "../components/TobBarNavegation";
import UsersList from "../components/UsersList";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";

export default function Followers(){

  const { user } = useAuth()
  const [followersList, setFollowersList] = useState([])

  useEffect(() => {
    async function getFollowres() {
      try {
        const response = await api.get(`${user?.followers_url}`)
        setFollowersList(response.data)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getFollowres()
  }, [user?.followers_url]);

  return(
    <>
      <TopBarNavegation title={`${user?.followers} seguidores`}/>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <UsersList list={followersList}/>
      </Container>
    </>
  )
}