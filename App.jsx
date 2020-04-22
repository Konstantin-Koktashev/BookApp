
import { BookApp } from './pages/BookApp.jsx';
import { Home } from './pages/Home.jsx';
import {NavBar} from './cmps/NavBar.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()
export class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="wrapper">
        <header>
            <NavBar></NavBar>
        </header>
        <main>
        
             <Switch>
                        {/* <Route component={AboutUs} path="/about" />
                        <Route component={CarEdit} path="/car/add" />
                        <Route component={CarEdit} path="/car/edit/:theCarId" />
                        <Route component={CarDetails} path="/car/:theCarId/:theCarName" />
                        <Route component={CarApp} path="/car" /> */}
                        {/* <Route component={AboutUs} path="/about" /> */}
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
      <footer>
          Copyright
      </footer>
      </div>
      </Router>
    )
  }
}
