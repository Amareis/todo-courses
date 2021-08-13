import React, { useEffect, useState } from 'react'
import { withErrorApi } from '@hoc/withErrorApi'
import { getApiResource } from '@utils/network'
import OrganizationsList from '@components/OrganizationsPage/OrganizationsList'

import { API_ORGANIZATIONS } from '@constants/api'

import styles from './OrganizationsPage.module.css'

const OrganizationsPage = ({ setErrorApi }) => {
  const [organizations, setUsers] = useState(null)

  const getResource = async (url) => {
    const res = await getApiResource(url)

    if (res) {
      const organizationsList = res.map(({ avatar_url, login, repos_url}) => {
        return {
          avatar_url,
          login,
          repos_url,
        }
      })
  
      setUsers(organizationsList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_ORGANIZATIONS)
  }, [])

  return (
    <>
      <h1>Организации</h1>
      {organizations && <OrganizationsList organizations={organizations}/>}
    </>
  )
}

export default withErrorApi(OrganizationsPage)