import { lazy, useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";

const TopBarNavegation = lazy(() => import('../components/TobBarNavegation'))
const UsersList = lazy(() => import('../components/UsersList'))
const Container = lazy(() => import('@material-ui/core/Container'))

export default function Followers(){

  const { user } = useAuth()
  const [followersList, setFollowersList] = useState([])

  useEffect(() => {
    async function getFollowres() {
      try {
        const response = await api.get(`${user?.followers_url}`)
        setFollowersList(response.data)
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