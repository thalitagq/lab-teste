import { Button } from '@material-ui/core'
import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useAuth } from '../contexts/auth'
import styles from '../styles/pages/Login.module.scss'

export default function Login(){

  const [userName, setUserName] = useState('')
  const  { Login } = useAuth()

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  return(
    <div className={styles.loginContainer}>
      <img src="/logo.png" className={styles.logo} alt="Logotipo do github"/>
      <input 
        type="text" 
        className={styles.inputField} 
        placeholder="Usuário" 
        alt="Usuário"
        onChange={handleInput}
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.loginButton}
        endIcon={<AiOutlineArrowRight/>}
        fullWidth
        onClick={() => Login(userName)}
      >
        ENTRAR
      </Button>
    </div>
  )
}