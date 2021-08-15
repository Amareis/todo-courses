import React, { useEffect, useState } from 'react'
import { getApiResource } from '@utils/network'
import SearchResult from '../SearchResult'

import { API_SEARCH } from '@constants/api'

import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  const [user, setUser] = useState(null)
  const [userInput, setUserInput] = useState('')

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    const getResource = async (url) => {
      const res = await getApiResource(url + '?q=' + userInput)

      setUser(res)
    }
    getResource(API_SEARCH)
  }

  return (
    <>
      <div className={styles.search__wrap}>
        <h4 className={styles.search__title}>Найти</h4>
        <input
          className={styles.search__form}
          type='text'
          placeholder='Введите запрос...'
          onChange={handleSearch}>
        </input>
        <button
          onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch}/>
        </button>
        <p>Ваши предыдущие запросы:</p>
      </div>
      {user !== null ? <SearchResult user={user}/> : <p>Попробуйте что-то поискать</p>}
    </>
  )
}

export default Search