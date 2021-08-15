import React from 'react'
import { Link } from 'react-router-dom'

import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {users.map(({ id, avatar_url, login }) =>
          <li key={login} className={styles.list__item}>{id}
            <Link to={`/users/${id}`}>
              {login}
            </Link>
            <img src={avatar_url} alt={login} className={styles.user__photo}/>
          </li>
        )}
      </ul>    
    </>
  )
}

export default UsersList