import React, { useEffect, useState } from 'react'
import { getApiResource } from '@utils/network'
import UserCardInfo from './UserCardInfo'

import { API_USERS } from '@constants/api'

import styles from './UserCard.module.css'

const UserCard = ({ match }) => {
  const [user, setUser] = useState([])

  const setUserData = async (userId, res) => {
    const userInfo = res.filter((user) => {
      if(user.id == userId) {
        return user
      }
    })
    setUser(userInfo)
  }

  console.log(user)

  useEffect(() => {
    (async () => {
      const userId = match.params.id
      const res = await getApiResource(API_USERS)
      setUserData(userId, res)
    })()
  }, [])
  // {avatar_url, followers_url, html_url, organizations_url, id}
  return (
    <>
      {user.map((element) => {
        console.log(element)
        return (
          <>
            <img src={element.avatar_url} />
            <h4>Ник пользователя: {element.login}</h4>
            <p>Подписчиков: {element.followers_url.length}</p>
            <p>Подписок: {element.following_url.length}</p>
          </>
        )
      })}
    </>
  )
}

export default UserCard