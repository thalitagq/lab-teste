import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TopBar from "../components/TopBar";
import User from "../components/User";
import { api } from "../services/api";

interface ViewUserInfo {
  avatar_url: string,
  login: string,
  name?: string,
  company?: string,
  bio?: string,
  followers?: number,
  followers_url: string,
  following?: number,
  following_url: string,
  starred_url: string,
  public_gists: number,
  email?: string,
  loacation?: string,
  public_repos?: number,
  organizations_url: string,
  repos_url: string,
}

export default function ViewUser(){
  const [login] = useState(useLocation().state)
  const [viewUser, setViewUser] = useState<ViewUserInfo>({} as ViewUserInfo)

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`users/${login}`)
        setViewUser(response.data)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [login]);

  return(
    <div>
      <TopBar isHome={false} login={viewUser.login} avatar_url={viewUser.avatar_url}/>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <User user={viewUser}/>
      </Container>
    </div>
  )
}