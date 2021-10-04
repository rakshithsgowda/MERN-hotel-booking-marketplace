import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import TopNav from './components/TopNav'

// Lets create top Navigation bar so that we can easily top Navigate between Pages.
// Writing in App.js befgore we move it to its own component.

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
      <Switch>
        <Route exact path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
