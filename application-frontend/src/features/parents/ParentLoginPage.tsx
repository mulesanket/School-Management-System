import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

interface ParentLoginFormValues {
  email: string;
  password: string;
}

const ParentLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values: ParentLoginFormValues) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/parent/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();

        // store minimal info in localStorage for now
        localStorage.setItem(
          "parentUser",
          JSON.stringify({
            parentId: data.parentId,
            fullName: data.fullName,
            email: data.email,
          })
        );

        message.success("Login successful");
        navigate("/parent/dashboard", { replace: true });
      } else if (response.status === 401) {
        const text = await response.text();
        message.error(text || "Invalid email or password");
      } else {
        const text = await response.text();
        message.error(text || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      message.error("Cannot reach server. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <Button type="primary" htmlType="submit" block loading={loading}>
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
