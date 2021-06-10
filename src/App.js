import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from './components/CheckoutForm/Checkout';

function App() {
  



  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
        

        
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">

            <Products/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
