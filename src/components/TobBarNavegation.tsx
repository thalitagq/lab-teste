import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { BiArrowBack } from 'react-icons/bi'

import styles from '../styles/components/TopBarNavegation.module.scss'

interface TolbarNavegationProps{
  title: string
}

export default function TopBarNavegation(props: TolbarNavegationProps) {
  return(
    <AppBar position="static" className={styles.topBarNavegationContainer}>
      <Toolbar variant="dense">
        <IconButton 
          edge="start" 
          className={styles.logoutButton} 
          aria-label="Sair"
        >
          <BiArrowBack />
        </IconButton>
        <span className={styles.topBarNavegationTitle}>{props.title}</span>
      </Toolbar>
    </AppBar>
  )
}