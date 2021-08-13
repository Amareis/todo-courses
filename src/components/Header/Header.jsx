import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li><NavLink to='/' exact>Главная</NavLink></li>
        <li><NavLink to='/users' exact>Пользователи</NavLink></li>
        <li><NavLink to='/organizations' exact>Организации</NavLink></li>
      </ul>
    </div>
  )
}

export default Header