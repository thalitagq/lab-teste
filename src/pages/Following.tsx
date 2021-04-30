import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import TopBarNavegation from "../components/TobBarNavegation";
import UsersList from "../components/UsersList";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";

export default function Following(){

  const { user } = useAuth()
  const [followingList, setFollowingList] = useState([])

  useEffect(() => {
    async function getFollowing() {
      try {
        const response = await api.get(`users/${user?.login}/following`)
        setFollowingList(response.data)
        console.log(response);
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