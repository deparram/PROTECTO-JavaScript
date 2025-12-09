import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Header from "../components/Header";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Plantas de Interior</h2>

        <div className="grid">
          {plants.map((plant) => {
            const added = cartItems.some(item => item.id === plant.id);

            return (
              <div className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  disabled={added}
                  onClick={() =>
                    dispatch(addToCart(plant))
                  }
                >
                  {added ? "Agregado" : "Agregar al Carrito"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
