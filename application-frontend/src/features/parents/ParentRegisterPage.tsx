import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, Select, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

interface ParentRegisterFormValues {
  name: string;
  email: string;
  phone: string;
  pupilName: string;
  relationship: string;
  password: string;
  confirmPassword: string;
}

const ParentRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values: ParentRegisterFormValues) => {
    setLoading(true);
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        pupilName: values.pupilName,
        relationship: values.relationship,
        password: values.password,
      };

      const response = await fetch(`${API_BASE_URL}/api/auth/parent/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 201) {
        message.success("Account created. You can now log in.");
        navigate("/parent/login", { replace: true });
        return;
      }

      const text = await response.text();
      if (response.status === 409) {
        // email already taken (as we coded in backend)
        message.error(text || "Email is already registered.");
      } else {
        message.error(text || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error", err);
      message.error("Something went wrong. Please try again.");
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
          width: 420,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
        }}
      >
        <Title level={4} style={{ marginBottom: 8 }}>
          Parent Registration
        </Title>
        <Text type="secondary" style={{ fontSize: 12 }}>
          Create your parent account to connect with the school.
        </Text>

        <Form layout="vertical" style={{ marginTop: 24 }} onFinish={handleFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="John Smith" />
          </Form.Item>

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
            label="Mobile Number"
            name="phone"
            rules={[{ required: true, message: "Please enter your mobile number" }]}
          >
            <Input placeholder="+91-9876543210" />
          </Form.Item>

          <Form.Item
            label="Pupil Name"
            name="pupilName"
            rules={[{ required: true, message: "Please enter your child's name" }]}
          >
            <Input placeholder="Oliver Smith" />
          </Form.Item>

          <Form.Item
            label="Relationship to Pupil"
            name="relationship"
            rules={[{ required: true, message: "Please select relationship" }]}
          >
            <Select placeholder="Select relationship">
              <Option value="mother">Mother</Option>
              <Option value="father">Father</Option>
              <Option value="guardian">Guardian</Option>
              <Option value="other">Other</Option>
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
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>

          <Form.Item style={{ marginTop: 8 }}>
            <Button type="primary" htmlType="submit" block loading={loading}>
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
            onClick={() => navigate("/parent/login", { replace: true })}
          >
            Back to login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ParentRegisterPage;
