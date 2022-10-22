//import logo from './logo.svg';
import './App.css';
//import ClerkPage from './ClerkPage';
import ClerkNavbar from './components/ClerkPage/ClerkNavbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/ClerkPage/pages/Home/Home';
import OrderForm from './components/ClerkPage/pages/Order/OrderForm';
// import InventoryForm from './pages/Inventory/inventoryform';
import Table from "./components/ClerkPage/ItemsTables/Table"
import RequestTable from './components/ClerkPage/RequestItemTable.js/RequestTable';
import ClerkPage from './components/ClerkPage/ClerkPagex';


function App() {
  return (
<>
    <Router>
    <ClerkNavbar />
    <Switch>
     <Route path='/' exact component={Home} />
        <Route path='/orders' component={OrderForm} />
        <Route path='/addItems' component={Table} />
        <Route path='/addRequests' component={RequestTable} />
        <Route path='/oldPage' component={ClerkPage} />

        </Switch>
      </Router>

      </>
  );
}

export default App;
