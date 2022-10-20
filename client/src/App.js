//import logo from './logo.svg';
import './App.css';
//import ClerkPage from './ClerkPage';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import OrderForm from './pages/Order/OrderForm';
import InventoryForm from './pages/Inventory/inventoryform';

function App() {
  return (
<>
    <Router>
    <Navbar />
    <Switch>
     <Route path='/' exact component={Home} />
        <Route path='/orders' component={OrderForm} />
        <Route path='/inventory' component={InventoryForm} />
        </Switch>
      </Router>

      </>
  );
}

export default App;
