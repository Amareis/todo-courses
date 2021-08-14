import React from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ match }) => {
  const id = match.params.id

  const getResource = () => {
    
  }

  console.log(id)

    return (
        <>User Card</>
    )
}

export default UserCard