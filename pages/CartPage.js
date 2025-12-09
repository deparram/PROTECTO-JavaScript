import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../store/cartSlice";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);
  const totalCost = items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      <Header />

      <div className="container">
        <h2>Carrito de Compras</h2>

        <p>Total de plantas: <strong>{totalQty}</strong></p>
        <p>Costo total: <strong>${totalCost}</strong></p>

        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>Precio unitario: ${item.price}</p>

              <div className="qty-controls">
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>

              <button
                className="delete-btn"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <button className="checkout-btn">Próximamente</button>

        <Link to="/products" className="continue-btn">
          Continuar Comprando
        </Link>
      </div>
    </>
  );
}
