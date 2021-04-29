
import { Container } from "@material-ui/core";
import { useEffect } from "react";
import TopBar from "../components/TopBar";
import User from "../components/User";
import { useAuth } from "../contexts/auth";

import {api} from '../services/api'

export default function Home(){

  const {user} = useAuth() 
  
  async function getFollowres() {
    api.get(`/users/${user?.login}/followers`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    console.log('useeffect');
    
    getFollowres()
  });

  return(
    <div>
      <TopBar />
      <Container maxWidth="md" style={{padding: 0}}>
        <User />
      </Container>
    </div>
  )
}