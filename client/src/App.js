//import logo from './logo.svg';
import './App.css';
//import ClerkPage from './ClerkPage';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Inventory from './pages/Inventory'

function App() {
  return (

<BrowserRouter>
<Navbar />
  <Routes>
  <Route path='/' exact component={Home} />
        <Route path='/orders' component={Order} />
        <Route path='/inventory' component={Inventory} />
  </Routes>

</BrowserRouter>
  );
}

export default App;
