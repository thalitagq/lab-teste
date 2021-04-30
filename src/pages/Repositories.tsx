import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import ReposList from "../components/ReposList";
import TopBarNavegation from "../components/TobBarNavegation";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";


export default function Repositories() {
  
  const {user} = useAuth()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await api.get(`${user?.repos_url}`)
        setRepos(response.data)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getRepos()
  }, [user?.repos_url]);
  
  return(
    <>
      <TopBarNavegation title={`${user?.public_repos} repositórios`}/>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <ReposList list={repos} />
      </Container>
    </>
  )
}