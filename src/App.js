import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>🏙️ Моє місто — Рівне</h1>

      <p>
        Ласкаво просимо на сайт, присвячений моєму рідному місту!
      </p>

      <div className="menu">
        <Link to="/city">Інформація про місто</Link>
        <Link to="/landmark">Найвідоміша пам'ятка</Link>
        <Link to="/photos">Фотографії міста</Link>
      </div>
    </div>
  );
}

function City() {
  return (
    <div className="page">
      <h1>🏙️ Рівне</h1>

      <p>
        Рівне — місто на заході України та адміністративний
        центр Рівненської області.
      </p>

      <p>
        Місто розташоване на річці Устя. Рівне є важливим
        культурним, освітнім та економічним центром області.
      </p>

      <p>
        У місті є багато парків, музеїв, пам'ятників та
        цікавих місць для відпочинку.
      </p>

      <Link to="/">← На головну</Link>
    </div>
  );
}

function Landmark() {
  return (
    <div className="page landmark">
      <h1>🦁 Рівненський зоопарк</h1>

      <img
        className="landmark-image"
        src="/zoo.jpg"
        alt="Рівненський зоопарк"
      />

      <p>
        Рівненський зоопарк — одна з найвідоміших пам'яток
        та туристичних локацій міста.
      </p>

      <p>
        На території зоопарку можна побачити багато різних
        видів тварин з усього світу.
      </p>

      <p>
        Це чудове місце для відпочинку всією родиною та
        знайомства з природою.
      </p>

      <Link to="/">← На головну</Link>
    </div>
  );
}

function Photos() {
  const places = [
    {
      image: "/rivne1.jpg",
      name: "Центр Рівного"
    },
    {
      image: "/rivne2.jpg",
      name: "Парк імені Тараса Шевченка"
    },
    {
      image: "/rivne3.jpg",
      name: "Свято-Воскресенський кафедральний собор"
    },
    {
      image: "/rivne4.jpg",
      name: "Лебедине озеро"
    }
  ];

  return (
    <div className="page">
      <h1>📸 Фотографії Рівного</h1>

      <div className="photos">
        {places.map((place, index) => (
          <div className="photo-card" key={index}>
            <img src={place.image} alt={place.name} />

            <h2>{place.name}</h2>
          </div>
        ))}
      </div>

      <Link to="/">← На головну</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/landmark" element={<Landmark />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;