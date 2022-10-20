import './App.css';
import {Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import Login from './components/login/Login';
import Monthly from './components/analytics/Monthly';

function App() {
  return (
    <div>
      <Routes>
        <Route>
         
        </Route>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin" element={<SideBar />} />
        <Route path='/analytics' element={<Monthly/>}/>
      </Routes>
    </div>
  );
}

export default App;
