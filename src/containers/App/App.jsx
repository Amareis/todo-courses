import React from 'react'
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
  )
}

export default App