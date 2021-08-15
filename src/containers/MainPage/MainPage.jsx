import React from 'react'
import Search from '@components/MainPage/Search'
import Favorites from '@components/MainPage/Favorites'

import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <>
    <h1 className={styles.header__text}>Поиск по GitHub</h1>
      <div className={styles.container}>
        <Favorites />
        <Search />
      </div>
    </>
  )
}

export default MainPage