import React from 'react'
import Search from '@components/MainPage/Search'

import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <>
      <h1 className={styles.header__text}>Поиск по GitHub</h1>
      <Search />
    </>
  )
}

export default MainPage