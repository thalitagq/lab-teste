import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../contexts/auth";

import styles from '../styles/components/TopBar.module.scss'

export default function TopBar() {

  const {user, Logout} = useAuth()

  async function handleLogout() {
    Logout();
  }

  return(
    <AppBar position="static" className={styles.topBarContainer}>
      <Toolbar variant="dense">
        <span className={styles.topBarTitle}>#{user?.login}</span>
        <Avatar
          alt="Foto de Prrfil"
          src={user?.avatar_url}
          className={styles.avatar}
        />
        <IconButton 
          edge="end" 
          className={styles.logoutButton} 
          aria-label="Sair"
          onClick={handleLogout}
        >
          Sair
          <FiLogOut/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}