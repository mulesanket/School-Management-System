import React from "react";
import { Card, Form, Input, Button, Typography } from "antd";

const { Title, Text } = Typography;

const ParentLoginPage: React.FC = () => {
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
          boxShadow: "0 10px 30px rgba(15,23,42,0.15)",
        }}
      >
        <Title level={4} style={{ marginBottom: 8 }}>
          Parent Login
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Access your child's updates, messages and payments.
        </Text>

        <Form layout="vertical" style={{ marginTop: 24 }}>
          <Form.Item label="Email">
            <Input placeholder="parent@example.com" />
          </Form.Item>

          <Form.Item label="Password">
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

export default ParentLoginPage;
