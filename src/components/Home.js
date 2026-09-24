import { Link } from "react-router-dom";
import { Button, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div className="page">
      <Title level={1}>🏙️ Моє місто — Рівне</Title>

      <Paragraph>
        Ласкаво просимо на сайт, присвячений моєму рідному місту!
      </Paragraph>

      <Space direction="vertical" size="middle" className="menu">
        <Link to="/city">
          <Button type="primary" size="large" block>
            Інформація про місто
          </Button>
        </Link>

        <Link to="/landmark">
          <Button type="primary" size="large" block>
            Найвідоміша пам'ятка
          </Button>
        </Link>

        <Link to="/photos">
          <Button type="primary" size="large" block>
            Фотографії міста
          </Button>
        </Link>

        <Link to="/users">
          <Button type="primary" size="large" block>
            Користувачі, які створили цей сайт
          </Button>
        </Link>
      </Space>
    </div>
  );
}

export default Home;