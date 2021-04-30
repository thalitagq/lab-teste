import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {FiGithub, FiHome, FiUsers} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../contexts/navbarContext';

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  const{currentPage, handleChangePage} = useNavbarContext()

  return(
    <BottomNavigation
      value={currentPage}
      onChange={(event, newValue) => {
        handleChangePage(newValue)
      }}
      showLabels
      classes={{root: styles.navbar}}
    >
      <BottomNavigationAction 
        component={Link}
        to="/"
        classes={{selected: styles.selected}} 
        label="Home" 
        icon={<FiHome size={25} />} 
      />
      <BottomNavigationAction 
        component={Link}
        to="/repos"
        classes={{ selected: styles.selected }} 
        label="Repos" 
        icon={<FiGithub size={25}/>} 

      />
      <BottomNavigationAction 
        component={Link}
        to="/seguidores"
        classes={{ selected: styles.selected }} 
        label="Seguidores" 
        icon={<FiUsers size={25}/>} 
      />
      <BottomNavigationAction 
        component={Link}
        to="/seguindo"
        classes={{ selected: styles.selected }} 
        label="Seguindo" 
        icon={<FiUsers size={25} />} 
      />
    </BottomNavigation>
  );
}
