import React from 'react'

import './App.css'

import { Main, Gallery } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { posters } from './data/posters'
import { originals } from './data/originals'
import { photos } from './data/photoBooks'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/originals">
            <Gallery data={originals} title="Оригиналы"></Gallery>
          </Route>
          <Route path="/posters">
            <Gallery data={posters} title="Постеры"></Gallery>
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
