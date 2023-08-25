import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import { useSelector } from 'react-redux';
import Main from './pages/home/main/Main';
import MainColor from './components/main/colors/color';
import Dashboard from './components/main/dashboard/Dashboard';



function App() {
  const viewMode=useSelector(state=>state.view.viewMode);
  return (
    <div className={`overflow-hide ${viewMode=='dark'?'dark-theme':''} `}>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sign-in'>SignIn</Link>
          </li>
          <li>
            <Link to='/sign-up'>SignUp</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path="/color" element={<MainColor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
