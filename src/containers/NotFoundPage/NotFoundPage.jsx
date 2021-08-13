import React from 'react'
import { useLocation } from 'react-router-dom'

import img from './img/not-found.jpg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <>
      <img className={styles.img} src={img} alt='not found' />
      <p className={styles.text}>
        Страница сооветствующая запросу <br/>
        <span className={styles.user__query}>{location.pathname}</span><br />
        не найдена
      </p>
    </>
  )
}

export default NotFoundPage