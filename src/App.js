import './App.css';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';
import Demo4 from './components/Demo4';
import Demo5 from './components/Demo5';
import Demo6 from './components/Demo6';
import Demo7 from './components/Demo7';
import Home from './pages/Home';
import NewCustomer from './pages/customer/NewCustomer';
import NewLocation from './pages/location/NewLocation';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
          <li>
            <Link to="/useContext">useContext</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
        </ul> */}
      </div>

      <Routes>
        <Route exact path='/dashboard' element={<Home />}>
        <Route exact path='/dashboard/customer' element={<NewCustomer />}></Route>
        <Route exact path='/dashboard/location' element={<NewLocation />}></Route>
      </Route>
        <Route exact path='/' element={<Auth />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/useEffect' element={< Demo2 />}></Route>
        <Route exact path='/useRef' element={< Demo3 />}></Route>
        <Route exact path='/useMemo' element={< Demo4 />}></Route>
        <Route exact path='/useCallback' element={< Demo5 />}></Route>
        <Route exact path='/useContext' element={< Demo6 />}></Route>
        <Route exact path='/useReducer' element={< Demo7 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
