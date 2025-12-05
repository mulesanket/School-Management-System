import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ParentLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("Parent login submitted:", values);
    // Later we will call backend /api/auth/parent/login here
    // For now, assume success and go to parent dashboard.
    navigate("/parent/dashboard", { replace: true });
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
          Parent Login
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Access your child's updates, messages and payments.
        </Text>

        <Form
          layout="vertical"
          style={{ marginTop: 24 }}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="parent@example.com" />
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
            onClick={() => navigate("/parent/register")}
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

export default ParentLoginPage;
