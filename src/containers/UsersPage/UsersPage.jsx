import React, { useEffect, useState } from 'react'
import { withErrorApi } from '@hoc/withErrorApi'
import { getApiResource } from '@utils/network'
import UsersList from '@components/UsersPage/UsersList'

import { API_USERS } from '@constants/api'

import styles from './UsersPage.module.css'

const UsersPage = ({ setErrorApi }) => {
  const [users, setUsers] = useState(null)

  const getResource = async (url) => {
    const res = await getApiResource(url)

    if (res) {
      const usersList = res.map(({ avatar_url, followers_url, html_url, id, login, organizations_url, repos_url }) => {
        return {
          avatar_url,
          followers_url,
          html_url,
          id,
          login,
          organizations_url,
          repos_url
        }
      })
  
      setUsers(usersList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_USERS)
  }, [])

  return (
    <>
      <h1>Пользователи</h1>
      {users && <UsersList users={users}/>}
    </>
  )
}

export default withErrorApi(UsersPage)