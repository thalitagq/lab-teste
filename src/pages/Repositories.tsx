import { lazy, useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";
import { api } from "../services/api";

const ReposList = lazy(() => import('../components/ReposList'));
const TopBarNavegation = lazy(() => import('../components/TobBarNavegation'));
const Container = lazy(() => import('@material-ui/core/Container'));

export default function Repositories() {
  
  const {user} = useAuth()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await api.get(`${user?.repos_url}`)
        setRepos(response.data)
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