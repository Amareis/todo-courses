import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
    <>
      <input className={styles.search__form} type='text' placeholder='Введите запрос...'></input>
    </>
  )
}

export default Search