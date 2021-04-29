import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from '../styles/components/UsersList.module.scss'

export default function UsersList() {
  return(
    <div>
      <List className={styles.usersListContainer}>
        <ListItem alignItems="center" className={styles.listcell}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={styles.userListAvatar}/>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            classes={{ root: styles.userListText }}
          />
          <ListItemSecondaryAction>
            <IconButton edge="start" className={styles.logoutButton} aria-label="Sair">
              <AiOutlineArrowRight />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="fullWidth" component="li" classes={{root: styles.divider}}/>
        <ListItem alignItems="center" className={styles.listcell}>
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={styles.userListAvatar}/>
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            classes={{root: styles.userListText}}
          />
          <ListItemSecondaryAction>
            <IconButton edge="start" className={styles.logoutButton} aria-label="Sair">
              <AiOutlineArrowRight />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="fullWidth" component="li" classes={{ root: styles.divider }} />
        <ListItem alignItems="center" className={styles.listcell}>
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={styles.userListAvatar}/>
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            classes={{root: styles.userListText}}
          />
          <ListItemSecondaryAction>
            <IconButton edge="start" className={styles.logoutButton} aria-label="Sair">
              <AiOutlineArrowRight />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )
}