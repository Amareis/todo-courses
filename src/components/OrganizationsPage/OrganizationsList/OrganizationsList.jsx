import styles from './OrganizationsList.module.css'

const OrganizationsList = ({ organizations }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {organizations.map(({ avatar_url, login, repos_url  }) =>
          <li key={login} className={styles.list__item}>
            <a href='#'>
              {login}
              <img src={avatar_url} alt={login} className={styles.organizations__photo}/>
            </a>
          </li>
        )}
      </ul>    
    </>
  )
}

export default OrganizationsList