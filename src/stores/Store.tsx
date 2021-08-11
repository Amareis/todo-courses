import React from 'react';
import { createContext, useState } from 'react';
import { useWindowSize } from '../api/useWindowSize';
import { IContext, Iitem } from '../interfaces/interfaces';

export const AppContext = createContext({} as IContext)

export function useStore() {
  const [users, setUsers] = useState<Iitem[] | null>(null)
  const [organizations, setOrganizations] = useState<Iitem[] | null>(null)
  const [favorites, setFavorites] = useState<Iitem[] | null>(null)
  const [page, setPage] = useState<string | null>(null)
  const [card, setCard] = useState<Iitem | null>(null)
  const [showMenu, setShowMenu] = useState(true)
  const [width,] = useWindowSize()

  return {
    page, // Вероятно, сюда впоследствии можно будет сохранять ссылку?
    setPage,
    users,
    setUsers,
    organizations,
    setOrganizations,
    favorites,
    setFavorites,
    card, 
    setCard,
    mobile: width < 900,
    showMenu,
    setShowMenu,
  }
}



// const useStore = 

// const [users, setUsers] = useState<Iitem[] | null >(null)
// const [organizations, setOrganizations] = useState<Iitem[] | null >(null)
// const [favorites, setFavorites] = useState<Iitem[] | null >(null)
// const [page, setPage] = useState<string | null>(null)
// const [card, setCard] = useState<Iitem | null>(null)
// const [showMenu, setShowMenu] = useState(true)
// const [width, ] = useWindowSize()

// export const AppContext = createContext<IContext>({
//   page,       // Вероятно, сюда впоследствии можно будет сохранять ссылку?
//   setPage,
//   users,
//   setUsers,
//   organizations,
//   setOrganizations,
//   favorites,
//   setFavorites,
//   card,
//   setCard,
//   mobile: width < 900,
//   showMenu,
//   setShowMenu,
// })

// export function useStore() {
  
// }
