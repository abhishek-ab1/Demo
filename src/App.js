import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './components/routes'
import {createContext} from 'react'
// import {createContext} from 'react'

export const MyContext = createContext(10)


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        //  -----  Redux provider -------
        <MyContext.Provider value={10}>
        <Switch>
          <Routes />
//           <Routes />
        </Switch>
        </MyContext.Provider>
      </Router>
    </div>
  );
}

export default App;
// export default App;

