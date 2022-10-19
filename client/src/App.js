//import logo from './logo.svg';
import './App.css';
//import ClerkPage from './ClerkPage';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Inventory from './pages/Inventory'

function App() {
  return (
<>
    <Router>
    <Navbar />
    <Switch>
     <Route path='/' exact component={Home} />
        <Route path='/orders' component={Order} />
        <Route path='/inventory' component={Inventory} />
        </Switch>
      </Router>

      </>
  );
}

export default App;
