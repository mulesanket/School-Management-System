import React from "react";
import { Card, Form, Input, Button, Typography, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

const PupilRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log("Pupil registration submitted:", values);
    // Later: call backend /api/auth/pupil/register here.
    // After successful registration, go back to login and REPLACE history
    // so Back button does NOT return to this registration page.
    navigate("/pupil/login", { replace: true });
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
          width: 420,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
        }}
      >
        <Title level={4} style={{ marginBottom: 8 }}>
          Pupil Registration
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Create your pupil account to access learning resources.
        </Text>

        <Form
          layout="vertical"
          style={{ marginTop: 24 }}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Oliver Smith" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please choose a username" }]}
          >
            <Input placeholder="oliver.smith" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="pupil@example.com" />
          </Form.Item>

          <Form.Item
            label="Class / Year"
            name="className"
            rules={[{ required: true, message: "Please enter your class" }]}
          >
            <Input placeholder="Year 5" />
          </Form.Item>

          <Form.Item
            label="Preferred Contact"
            name="contactPreference"
          >
            <Select placeholder="Optional">
              <Option value="email">Email</Option>
              <Option value="in-app">In-app only</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <Input.Password placeholder="Create a password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>

          <Form.Item style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit" block>
              Create Account
            </Button>
          </Form.Item>
        </Form>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "flex-end",
            fontSize: 12,
          }}
        >
<Button
  type="link"
  style={{ padding: 0 }}
  onClick={() => navigate("/pupil/login", { replace: true })} 
>
  Back to login
</Button>

        </div>
      </Card>
    </div>
  );
};

export default PupilRegisterPage;
