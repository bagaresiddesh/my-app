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
import Customer from './pages/customer/Customer';
import Location from './pages/location/Location';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CustomerForm from './pages/customer/CustomerForm';


function App() {

  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route exact path='/dashboard' element={<Home />}>
          <Route exact path='/dashboard/customer/get' element={<Customer />}></Route>
          <Route exact path='/dashboard/customer/create' element={<CustomerForm />}></Route>

          <Route exact path='/dashboard/location/get' element={<Location />}></Route>
          <Route exact path='/dashboard/location/create' element={<CustomerForm />}></Route>
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
