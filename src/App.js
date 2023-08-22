import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <div className='dark-them'>
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
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
