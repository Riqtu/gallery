import React from 'react'

import './App.css'

import { Main, Gallery } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import { posters } from './data/posters'
import { photos } from './data/photoBooks'
import { Composition, ModalEl } from './components'
import Accessories from './components/Accessories/Accessories'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/originals" exact>
            <Composition
              name={'originals'}
              title="Живопись, графика"
            ></Composition>
          </Route>
          <Route path="/:typeName/:id" exact>
            <ModalEl></ModalEl>
          </Route>
          <Route path="/posters">
            <Composition name={'posters'} title="Постеры"></Composition>
          </Route>
          <Route path="/accessories">
            <Accessories
              name={'accessories'}
              title="Акварельные шелковые аксессуары"
            ></Accessories>
          </Route>
          <Route path="/photos">
            <Gallery data={photos} title="Фотокниги"></Gallery>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
