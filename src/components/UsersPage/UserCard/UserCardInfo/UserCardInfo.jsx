import styles from './UserCardInfo.module.css'

const UserCardInfo = (user) => {
  console.log(user)
  return (
    <>
      {user.map((element) => {
        console.log(element)
      })}
    </>
  )
}

export default UserCardInfo