import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Navbar = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-Commerce
          </Link>

          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="mb-2 navbar-nav me-auto mb-lg-0 d-flex justify-content-end">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex " to="/cart">
                  Cart
                  {itemCount > 0 && (
                    <p className="badge bg-success ms-1 cart-counter">
                      {itemCount}
                    </p>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
