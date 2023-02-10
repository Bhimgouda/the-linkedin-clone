import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import { userLogin } from './services/user';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState();
  
  useEffect(()=>{
    const getUser = async()=>{
      const {data} = await userLogin()
      if(data) setUser(data.user)
    }
    getUser();
  },[]);

  const updateUser = async(u)=>{
    setUser(u);
  }

  return (
  <Router>
    <div className='app'>
      {user ? <Header user={user} updateUser={updateUser}/> : null}
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home updateUser={updateUser} user={user}/>}  />
          <Route path='/register' element={<Register updateUser={updateUser} />} />
          <Route path='/login' element={<Login updateUser={updateUser} />} />
        </Routes>
     </div>
  </Router>
  );
}

export default App;
