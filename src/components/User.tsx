import styles from '../styles/components/User.module.scss'

interface UserInfo {
  avatar_url: string,
  login: string,
  name?: string,
  bio?: string,
  followers?: number,
  following?: number,
  email?: string,
  loacation?: string,
  public_repos?: number,
}

interface UserProps{
  user?: UserInfo | null
}

export default function User(props: UserProps) {
  
  return(
    <div className={styles.userContainer}>
      <div className={styles.titleContainer}>
        {props.user?.name && <h3>{props.user?.name}</h3>}
        <p>
          {props.user?.email}
          <br />
          {props.user?.loacation}
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.infoCell}>
          <h1>{props.user?.followers}</h1>
          <span>Seguidores</span>
        </div>
        <div className={styles.infoCell}>
          <h1>{props.user?.following}</h1>
          <span>Seguindo</span>
        </div>
        <div className={styles.infoCell}>
          <h1>{props.user?.public_repos}</h1>
          <span>Repos</span>
        </div>
      </div>
      {props.user?.bio && <h3>BIO</h3>}
      <p>{props.user?.bio}</p>
    </div>
  )
}