import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Home from './components/Home';

function App() {

  
  return (

  <Router>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
     </div>
  </Router>
  );
}

export default App;
