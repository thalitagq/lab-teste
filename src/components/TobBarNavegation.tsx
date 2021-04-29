import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { BiArrowBack } from 'react-icons/bi'

import styles from '../styles/components/TopBarNavegation.module.scss'

export default function TopBarNavegation() {
  return(
    <AppBar position="static" className={styles.topBarNavegationContainer}>
      <Toolbar variant="dense">
        <IconButton edge="start" className={styles.logoutButton} aria-label="Sair">
          <BiArrowBack />
        </IconButton>
        <span className={styles.topBarNavegationTitle}>10 seguidores</span>
      </Toolbar>
    </AppBar>
  )
}