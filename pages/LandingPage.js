import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>GreenHome Plants</h1>

      <p>
        Somos tu tienda especializada en plantas de interior. 
        Traemos naturaleza y frescura a tu hogar.
      </p>

      <Link to="/products" className="start-btn">Comenzar</Link>
    </div>
  );
}
