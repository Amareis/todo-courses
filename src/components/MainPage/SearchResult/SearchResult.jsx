import React from 'react'

import styles from './SearchResult.module.css'

const SearchResult = ({user}) => {
  console.log(user.items)
  return (
    <>
      <div className={styles.result__wrap}>
        <h4 className={styles.result__title}>Результаты поиска</h4>
        {user.items.map(({ avatar_url, followers_url, following_url, login, organizations_url }) =>
            <>
              <img key={login} src={avatar_url} alt={login}/>
              <h4>{login}</h4>
            </>
        )}
      </div>
    </>
  )
}

export default SearchResult