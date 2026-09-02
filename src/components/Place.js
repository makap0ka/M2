import { Link } from "react-router-dom";

function Places() {
  const places = [
    "Парк культури та відпочинку імені Тараса Шевченка",
    "Рівненський обласний краєзнавчий музей",
    "Свято-Воскресенський кафедральний собор",
    "Бульвар Незалежності",
    "Гідропарк",
    "Лебедине озеро"
  ];

  return (
    <div className="page">
      <h1>📍 Інші пам'ятки Рівного</h1>

      <ul>
        {places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>

      <Link to="/">⬅ На головну</Link>
    </div>
  );
}

export default Places;