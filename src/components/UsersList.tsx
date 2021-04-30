import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from '../styles/components/UsersList.module.scss'

interface UserListProps{
  list?: User[]
}

interface User{
  id: number
  avatar_url: string
  followers_url: string
  following_url: string
  gists_url: string
  login: string
  organizations_url: string
  repos_url: string
  starred_url: string
}

export default function UsersList(props: UserListProps) {

  return(
    <List className={styles.usersListContainer}>
      {props.list?.map((user) => {
        return(
          <div key={user.id}>
            <ListItem 
              button
              alignItems="center" 
              className={styles.listcell} 
              component={Link}
              to={{ pathname: `/seguidores/${user.login}`, state: user.login }}
            >
              <ListItemAvatar>
                <Avatar alt={user.login} src={user.avatar_url} className={styles.userListAvatar}/>
              </ListItemAvatar>
              <ListItemText
                primary={`#${user.login}`}
                classes={{ root: styles.userListText }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="start" className={styles.logoutButton} aria-label="Ver usuário">
                  <AiOutlineArrowRight />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="fullWidth" component="li" classes={{root: styles.divider}}/>
          </div>
        )
      })}
    </List>
  )
}