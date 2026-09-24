import { useEffect, useState } from "react";
import { Card, Col, Row, Typography, Button, Spin, Alert } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка завантаження");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <Title level={1}>👥 Зареєстровані користувачі</Title>

      <Paragraph>
        Список користувачів отримано з DummyJSON API.
      </Paragraph>

      {loading && (
        <div className="loading">
          <Spin size="large" />
          <p>Завантаження користувачів...</p>
        </div>
      )}

      {error && (
        <Alert
          message="Помилка"
          description="Не вдалося завантажити список користувачів."
          type="error"
          showIcon
        />
      )}

      {!loading && !error && (
        <Row gutter={[20, 20]}>
          {users.map((user) => (
            <Col xs={24} sm={12} lg={8} key={user.id}>
              <Card
                className="user-card"
                cover={
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                }
              >
                <Title level={4}>
                  {user.firstName} {user.lastName}
                </Title>

                <Paragraph>
                  <b>Username:</b> {user.username}
                </Paragraph>

                <Paragraph>
                  <b>Email:</b> {user.email}
                </Paragraph>

                <Paragraph>
                  <b>Телефон:</b> {user.phone}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div className="back-button">
        <Link to="/">
          <Button>← На головну</Button>
        </Link>
      </div>
    </div>
  );
}

export default Users;