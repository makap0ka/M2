
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Typography, Form, Card, message } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !comment.trim()) {
      messageApi.error("Заповніть усі поля!");
      return;
    }

    messageApi.success("Дані успішно зчитано!");

    console.log("Ім'я:", name);
    console.log("Email:", email);
    console.log("Повідомлення:", comment);

    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <div className="page">
      {contextHolder}

      <Title level={1}>Форма зворотного зв'язку</Title>

      <Card>
        <Form layout="vertical" onSubmitCapture={handleSubmit}>
          <Form.Item label="Ваше ім'я">
            <Input
              placeholder="Введіть ім'я"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Item>

          <Form.Item label="Електронна пошта">
            <Input
              type="email"
              placeholder="Введіть email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Item>

          <Form.Item label="Повідомлення">
            <TextArea
              rows={4}
              placeholder="Введіть повідомлення"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Надіслати
          </Button>
        </Form>
      </Card>

      <div className="back-button">
        <Link to="/">
          <Button>← На головну</Button>
        </Link>
      </div>
    </div>
  );
}

export default ContactForm;