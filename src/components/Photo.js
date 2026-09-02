import { Link } from "react-router-dom";

function Photos() {
  return (
    <div className="page">
      <h1>📸 Фотографії Рівного</h1>

      <div className="photos">
        <img src="/rivne1.jpg" alt="Рівне" />
        <img src="/rivne2.jpg" alt="Рівне" />
        <img src="/rivne3.jpg" alt="Рівне" />
        <img src="/rivne4.jpg" alt="Рівне" />
      </div>

      <Link to="/">⬅ На головну</Link>
    </div>
  );
}

export default Photos;