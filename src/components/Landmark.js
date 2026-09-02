import { Link } from "react-router-dom";

function Landmark() {
  return (
    <div className="page">
      <h1>🦁 Рівненський зоопарк</h1>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/..."
        alt="Рівненський зоопарк"
      />

      <p>
        Рівненський зоопарк — одна з найвідоміших туристичних
        локацій міста.
      </p>

      <p>
        Тут можна побачити різноманітних тварин, відвідати
        тематичні зони та провести час із родиною.
      </p>

      <Link to="/">⬅ На головну</Link>
    </div>
  );
}

export default Landmark;