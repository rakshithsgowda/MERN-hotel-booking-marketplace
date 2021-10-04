import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
      <Switch>
        <Route exact path='/Login' component={Login} />
      </Switch>
      <Switch>
        <Route exact path='/Home' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
