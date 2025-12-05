import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const PupilLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("Pupil login submitted:", values);
    // Later: call backend /api/auth/pupil/login here
    // and on success redirect to a pupil dashboard like /pupil/dashboard
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Card
        style={{
          width: 380,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
        }}
      >
        <Title level={4} style={{ marginBottom: 8 }}>
          Pupil Login
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Access homework, announcements and resources.
        </Text>

        <Form
          layout="vertical"
          style={{ marginTop: 24 }}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="pupil username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => navigate("/pupil/register")}
          >
            Create an account
          </Button>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => alert("Forgot password flow will be added later")}
          >
            Forgot password?
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PupilLoginPage;
