import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import './Navigation.css'
const Navigation = () => {
    const {cart}= useCart()
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/cards'>Cards</NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
      <div>
        logo
      </div>
    </header>
  );
};

export default Navigation;
