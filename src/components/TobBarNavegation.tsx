import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { BiArrowBack } from 'react-icons/bi'
import { useHistory } from "react-router-dom";

import styles from '../styles/components/TopBarNavegation.module.scss'

interface TolbarNavegationProps{
  title: string
}

export default function TopBarNavegation(props: TolbarNavegationProps) {

  const history = useHistory()

  return(
    <AppBar position="static" className={styles.topBarNavegationContainer}>
      <Toolbar variant="dense">
        <IconButton 
          edge="start" 
          aria-label="Voltar"
          onClick={() => history.goBack()}
        >
          <BiArrowBack />
        </IconButton>
        <span className={styles.topBarNavegationTitle}>{props.title}</span>
      </Toolbar>
    </AppBar>
  )
}