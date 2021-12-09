import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import CheckOut from "./components/CheckOut/CheckOut";
import Success from "./components/CheckOut/stripe-checkout/Success";
import Cancelled from "./components/CheckOut/stripe-checkout/Cancelled";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product/:productId">
            <Products />
          </Route>
          <Route path="/checkOut">
            <CheckOut />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/canceled">
            <Cancelled />
          </Route>
          <Route path="*">there is no such routesList</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
