import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';

function App() {

  
  return (
   <div className='app'>
    <Header/>

  <Login/>

    {/* <div className='app__body'> */}
      {/* <Sidebar/>
      <Feed/> */}
      {/* Widgets */}
    {/* </div> */}
   </div>
  );
}

export default App;
