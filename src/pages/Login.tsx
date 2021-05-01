import { lazy, useRef, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useAuth } from '../contexts/auth'
import styles from '../styles/pages/Login.module.scss'

const Button = lazy(() => import('@material-ui/core/Button'))
const Snackbar = lazy(() => import('@material-ui/core/Snackbar'))
const MuiAlert = lazy(() => import('@material-ui/lab/Alert'))

export default function Login(){

  const [userName, setUserName] = useState('')
  const [errorLogin, setErrorLogin] = useState(false)
  const [openToast, setOpenToast] = useState(false);
  const userNameInput = useRef<HTMLInputElement>(null)
  const  { Login, user } = useAuth()
  
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  async function handleLogin() {
    if (!userName && userNameInput.current){
      setErrorLogin(true)
      userNameInput.current?.setAttribute('value', 'Campo obrigatório')
    }
    else{
      await Login(userName)
      if (!user && userNameInput.current) {
        setErrorLogin(true)
        setOpenToast(true)
      }
    }
  }
  
  function resetErrorLogin(){
    setErrorLogin(false)
    userNameInput.current?.setAttribute('value', '')
  }

  return(
    <div className={styles.loginContainer}>
      <Snackbar 
        open={openToast} 
        autoHideDuration={6000} 
        onClose={() => { setOpenToast(false) }} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert 
          onClose={() => { setOpenToast(false) }} 
          severity="error" 
          elevation={6} 
          variant="filled"
        >
          Ocorreu um erro. Verifique o nome de usuário e tente novamente
        </MuiAlert>
      </Snackbar>
      <img src="/logo.png" className={styles.logo} alt="Logotipo do github"/>
      <input 
        ref={userNameInput}
        type="text" 
        className={errorLogin ? `${styles.inputField} ${styles.errorText}` : styles.inputField}
        placeholder="Usuário" 
        alt="Usuário"
        onChange={handleInput}
        onClick={resetErrorLogin}
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.loginButton}
        endIcon={<AiOutlineArrowRight/>}
        fullWidth
        onClick={handleLogin}
      >
        ENTRAR
      </Button>
    </div>
  )
}