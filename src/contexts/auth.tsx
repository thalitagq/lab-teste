import { createContext, useState, useEffect, useContext} from 'react';
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
      value={{ signed: Boolean(user), user, Login, Logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
