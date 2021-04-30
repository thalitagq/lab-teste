import { createContext, useState, useEffect, useContext } from 'react';
import { ReactNode } from 'react';

import {api} from '../services/api';

interface User{
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


  // avatar_url: "https://avatars.githubusercontent.com/u/23299150?v=4"
  // bio: null
  // blog: ""
  // company: null
  // created_at: "2016-11-06T20:12:25Z"
  // email: null
  // events_url: "https://api.github.com/users/thalitagq/events{/privacy}"
  // followers: 6
  // followers_url: "https://api.github.com/users/thalitagq/followers"
  // following: 6
  // following_url: "https://api.github.com/users/thalitagq/following{/other_user}"
  // gists_url: "https://api.github.com/users/thalitagq/gists{/gist_id}"
  // gravatar_id: ""
  // hireable: null
  // html_url: "https://github.com/thalitagq"
  // id: 23299150
  // location: null
  // login: "thalitagq"
  // name: null
  // node_id: "MDQ6VXNlcjIzMjk5MTUw"
  // organizations_url: "https://api.github.com/users/thalitagq/orgs"
  // public_gists: 0
  // public_repos: 14
  // received_events_url: "https://api.github.com/users/thalitagq/received_events"
  // repos_url: "https://api.github.com/users/thalitagq/repos"
  // site_admin: false
  // starred_url: "https://api.github.com/users/thalitagq/starred{/owner}{/repo}"
  // subscriptions_url: "https://api.github.com/users/thalitagq/subscriptions"
  // twitter_username: null
  // type: "User"
  // updated_at: "2021-04-15T17:29:16Z"
  // url: "https://api.github.com/users/thalitagq"
}

interface AuthContextData {
  signed: boolean;
  user?: User | null;
  Login(userName: string): Promise<void>;
  Logout(): void;
}

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  async function Login(userName: string) {
    await api.get(`/users/${userName}`).then( (response) => {
      // handle success
      setUser(response.data);
      sessionStorage.setItem('@App:user', JSON.stringify(response.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() =>{
      // always executed
    });
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
