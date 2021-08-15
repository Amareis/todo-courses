import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDownAlt, faSortAmountUp, faBookmark } from '@fortawesome/free-solid-svg-icons'

import styles from './Favorites.module.css'

const Favorites = () => {
  return (
    <>
      <div className={styles.favorites__wrap}>
        <div>
          <h4 className={styles.favorites__title}>Избранное <FontAwesomeIcon icon={faBookmark} /></h4>
             <ul className={styles.favorites__filter}>
               <li>
                <button><FontAwesomeIcon icon={faSortAmountDownAlt} /></button>
               </li>
               <li className={styles.filter__title}>Сортировать</li>
               <li>
                <button><FontAwesomeIcon icon={faSortAmountUp} /></button>
               </li>
             </ul>
        </div>
      </div>
    </>
  )
}

export default Favorites