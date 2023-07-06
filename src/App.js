import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from './components/CheckoutForm/Checkout';
import Politica from './components/Politica';
import Footer from './components/Footer';
import Devoluciones from './components/Devoluciones';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/devoluciones">
            <Devoluciones/>
            <Footer/>
          </Route>
          <Route path="/politica">
            <Politica/>
            <Footer/>
          </Route>
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Products/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
