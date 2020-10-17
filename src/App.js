import React from 'react'

import './App.css'

import { Main, Gallery } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { data } from './pages/Gallery/data'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/originals">
            <Gallery data={data} title="Оригиналы"></Gallery>
          </Route>
          <Route path="/posters">
            <Gallery data={data} title="Постеры"></Gallery>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
