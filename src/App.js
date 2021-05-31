import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import OrderCheckout from "./components/OrderCheckout/OrderCheckout";

function App() {
  const products = useSelector((state) => {
    return state.cart.cart;
  });
  return (
    <Router>
      <div>
        {products.length ? (
          <div className="full-cart position-fixed end-0 d-flex justify-content-center align-items-center">
            <Link to="/checkout">
              <FontAwesomeIcon
                className="position-relative"
                icon={faCartArrowDown}
                size="2x"
              />
              <span className="position-absolute translate-middle badge border border-light rounded-circle bg-danger p-2">
                {products.length}
              </span>
            </Link>
          </div> 
        ): null}

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <OrderCheckout></OrderCheckout>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
