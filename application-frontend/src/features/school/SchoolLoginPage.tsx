import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const SchoolLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("School login form submitted:", values);
    // Later: call backend, and on success:
    navigate("/school/dashboard", { replace: true });
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
          School Login
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Admin & staff access to the school portal
        </Text>

        <Form layout="vertical" style={{ marginTop: 24 }} onFinish={handleFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="admin@school.com" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SchoolLoginPage;
