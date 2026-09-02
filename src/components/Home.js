import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>🏙️ Моє місто — Рівне</h1>

      <p>
        Ласкаво просимо на сайт, присвячений місту Рівне!
      </p>

      <div className="menu">
        <Link to="/city">Інформація про місто</Link>

        <Link to="/landmark">
          Найвідоміша пам'ятка
        </Link>

        <Link to="/places">
          Інші пам'ятки
        </Link>

        <Link to="/photos">
          Фотографії міста
        </Link>
      </div>
    </div>
  );
}

export default Home;