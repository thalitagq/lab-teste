import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import { BiArrowBack } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/auth";
import { useNavbarContext } from "../contexts/navbarContext";

import styles from '../styles/components/TopBar.module.scss'

interface TopBarProps{
  isHome: boolean,
  login: string,
  avatar_url?: string,
}

export default function TopBar(props: TopBarProps) {

  const {Logout, Login} = useAuth()
  const {handleChangePage} = useNavbarContext()
  const history = useHistory()
  async function handleLogout() {
    Logout();
  }

  function goHome(){
    history.push('/')
    handleChangePage(0)
  }

  return(
    <AppBar position="static" className={styles.topBarContainer}>
      <Toolbar variant="dense" className={styles.toolBar}>
        {props.isHome
        ?(
          <span className={styles.topBarTitle}>#{props?.login}</span>
        )
        :(
          <>
          <IconButton
            edge = "start"
            aria-label="Voltar"
            onClick={() => history.goBack()}
            className={styles.backButton}
          >
            <BiArrowBack />
          </IconButton>
            <span className={`${styles.topBarTitle} ${styles.topBarTitleTranslate}`}>#{props?.login}</span>
          </>
        )
        }

        <Avatar
          alt="Foto de Prrfil"
          src={props?.avatar_url}
          className={styles.avatar}
        />
        {props.isHome
          ?(
            <IconButton 
              edge="end" 
              className={styles.logoutButton} 
              aria-label="Sair"
              onClick={handleLogout}
            >
              Sair
              <FiLogOut/>
            </IconButton>
            )
          :(
            <IconButton
              edge="end"
              className={styles.saveButton}
              aria-label="Sair"
              onClick={() => {
                Login(props.login);
                goHome();
              }}
            >
              Salvar
              <FiLogOut />
            </IconButton>
            )  
        }
      </Toolbar>
    </AppBar>
  )
}