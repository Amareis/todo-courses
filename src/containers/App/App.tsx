import React from 'react'
<<<<<<< HEAD:src/containers/App/App.jsx
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '@components/Header'

import routesConfig from '@routes/routesConfig'

import styles from './App.module.css'

const App = () => {

  return(
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />

          <Switch>
            {routesConfig.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
            ))}
          </Switch>

        </BrowserRouter>
      </div>
    </>
=======
import { AppContext, useStore } from '../../stores/Store'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Card } from '../../components/Card/Card'

import S from './App.module.css'

function App(): JSX.Element {
  const store = useStore()

  return (
    <AppContext.Provider value={store}>
      <AppContext.Consumer>{()=>(
      <div>
      <div className={S.wrapper}>
        <Header />
      </div>
      <div className={S.wrapper}>
        <main className={S.main}>
          <Menu />
          <SearchPanel />
          <Card />
        </main>
      </div>
      </div>
      )}</AppContext.Consumer>
    </AppContext.Provider>
>>>>>>> main:src/containers/App/App.tsx
  )
}

export default App