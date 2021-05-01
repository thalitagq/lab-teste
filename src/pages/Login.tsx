import { lazy, useRef, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useAuth } from '../contexts/auth'
import styles from '../styles/pages/Login.module.scss'

const Button = lazy(() => import('@material-ui/core/Button'))

export default function Login(){

  const [userName, setUserName] = useState('')
  const [emptyLoginError, setEmptyLoginError] = useState(false)
  const userNameInput = useRef<HTMLInputElement>(null)
  const  { Login } = useAuth()
  
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  async function handleLogin() {
    if (!userName && userNameInput.current){
      setEmptyLoginError(true)
      userNameInput.current?.setAttribute('value', 'Campo obrigatório')
    }
    else{
      await Login(userName).then((res)=>{
        if(res === 'error'){
          alert('Ocorreu um erro. Verifique o nome de usuário e tente novamente')
        }
      }) 
    }
  }

  function resetErrorLogin(){
    setEmptyLoginError(false)
    userNameInput.current?.setAttribute('value', '')
  }

  return(
    <div className={styles.loginContainer}>
      <img src="/logo.png" className={styles.logo} alt="Logotipo do github"/>
      <input 
        ref={userNameInput}
        type="text" 
        className={emptyLoginError ? `${styles.inputField} ${styles.errorText}` : styles.inputField}
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