import { lazy, useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";

const TopBarNavegation = lazy(() => import('../components/TobBarNavegation'));
const UsersList = lazy(() => import('../components/UsersList'));
const Container = lazy(() => import('@material-ui/core/Container'))

export default function Following(){

  const { user } = useAuth()
  const [followingList, setFollowingList] = useState([])

  useEffect(() => {
    async function getFollowing() {
      try {
        const response = await api.get(`users/${user?.login}/following`)
        setFollowingList(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getFollowing()
  }, [user?.login]);

  return (
    <>
      <TopBarNavegation title={`seguindo ${user?.followers}`} />
      <Container maxWidth="md" style={{ padding: 0 }}>
        <UsersList list={followingList} />
      </Container>
    </>
  )
}