import React from 'react'
import { useAuth } from '../contexts/auth'
import styles from '../styles/components/User.module.scss'

export default function User() {

  const{user} = useAuth()

  return(
    <div className={styles.userContainer}>
      <div className={styles.titleContainer}>
        {user?.name && <h3>{user?.name}</h3>}
        <p>
          {user?.email}
          <br />
          {user?.loacation}
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.infoCell}>
          <h1>{user?.followers}</h1>
          <span>Seguidores</span>
        </div>
        <div className={styles.infoCell}>
          <h1>{user?.following}</h1>
          <span>Seguindo</span>
        </div>
        <div className={styles.infoCell}>
          <h1>{user?.public_repos}</h1>
          <span>Repos</span>
        </div>
      </div>
      {user?.bio && <h3>BIO</h3>}
      <p>{user?.bio}</p>
    </div>
  )
}