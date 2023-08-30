import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import { useSelector } from 'react-redux';
import MainColor from './layout/color';
import Dashboard from './layout/dashboard';
import DetailAcount from './layout/detailAcount/DetailAcount';



function App() {
  const viewMode=useSelector(state=>state.view.viewMode);
  return (
    <div className={`overflow-hide ${viewMode=='dark'?'dark-theme':''} `}>
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path="/color" element={<MainColor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/detail-acount' element={<DetailAcount/>}/>
        </Route>
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
