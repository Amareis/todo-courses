import React from 'react'

import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <>
          <p className={styles.text}>
            Что-то пошло не так
          </p>
        </>
    )
}

export default ErrorMessage