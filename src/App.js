import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Card, Typography, Space, Image } from "antd";
import Home from "./components/Home";
import Users from "./components/Users";
import "./App.css";

const { Title, Paragraph } = Typography;

function City() {
  return (
    <div className="page">
      <Title level={1}>🏙️ Рівне</Title>

      <Paragraph>
        Рівне — місто на заході України та адміністративний
        центр Рівненської області.
      </Paragraph>

      <Paragraph>
        Місто розташоване на річці Устя. Рівне є важливим
        культурним, освітнім та економічним центром області.
      </Paragraph>

      <Paragraph>
        У місті є багато парків, музеїв, пам'ятників та
        цікавих місць для відпочинку.
      </Paragraph>

      <Link to="/">
        <Button>← На головну</Button>
      </Link>
    </div>
  );
}

function Landmark() {
  return (
    <div className="page landmark">
      <Title level={1}>🦁 Рівненський зоопарк</Title>

      <Image
        className="landmark-image"
        src="/zoo.jpg"
        alt="Рівненський зоопарк"
      />

      <Paragraph>
        Рівненський зоопарк — одна з найвідоміших пам'яток
        та туристичних локацій міста.
      </Paragraph>

      <Paragraph>
        На території зоопарку можна побачити багато різних
        видів тварин з усього світу.
      </Paragraph>

      <Paragraph>
        Це чудове місце для відпочинку всією родиною та
        знайомства з природою.
      </Paragraph>

      <Link to="/">
        <Button>← На головну</Button>
      </Link>
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
      <Title level={1}>📸 Фотографії Рівного</Title>

      <div className="photos">
        {places.map((place, index) => (
          <Card
            key={index}
            className="photo-card"
            title={place.name}
          >
            <Image
              src={place.image}
              alt={place.name}
            />
          </Card>
        ))}
      </div>

      <div className="back-button">
        <Link to="/">
          <Button>← На головну</Button>
        </Link>
      </div>
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
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;