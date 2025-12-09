import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.qty, 0)
  );

  return (
    <header className="header">
      <Link to="/products" className="logo">GreenHome Plants</Link>

      <nav>
        <Link to="/products">Productos</Link>
        <Link to="/cart" className="cart-icon">
          🛒 <span>{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

