import { Divider, List, ListItem, ListItemText } from "@material-ui/core"
import React from "react"
import { BiStar } from "react-icons/bi"
import { FiLock, FiUnlock } from "react-icons/fi"

import styles from '../styles/components/ReposList.module.scss'

interface Repo{
  id: number,
  deployments_url: string
  description?: string | null
  full_name: string
  git_url: string
  name: string
  private: boolean
  stargazers_count: 0
}

interface ReposListProps{
  list: Repo[]
}

export default function ReposList(props: ReposListProps){
  return (
    <div>
      <List className={styles.reposListContainer}>
        {props.list?.map((repo) => {
          return (
            <div key={repo.id}>
              <ListItem alignItems="center" className={styles.listcell}>
                <ListItemText
                  primary={`#${repo.name}`}
                  classes={{ root: styles.reposListTitle }}
                  // secondary={ repo.description }
                  secondary={
                    <React.Fragment>
                      {repo.description && <p className={styles.subTitle}>{repo.description}</p>}
                      <span className={styles.repoInfo}>
                        <span className={styles.star}><BiStar />{repo.stargazers_count}</span>
                        {repo.private 
                          ? <span className={styles.lockClosed}><FiLock/></span>
                          : <span className={styles.lockOpen}><FiUnlock/></span>
                        }
                      </span>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="fullWidth" component="li" classes={{ root: styles.divider }} />
            </div>
          )
        })}
      </List>
    </div>
  )
} 