import React from "react";
import {
  Layout,
  Card,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Tag,
} from "antd";
import {
  BankOutlined,
  TeamOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

type LoginOptionCardProps = {
  title: string;
  roleLabel: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  icon: React.ReactNode;
  accentColor: string;
  onClick?: () => void;
};

const LoginOptionCard: React.FC<LoginOptionCardProps> = ({
  title,
  roleLabel,
  description,
  buttonText,
  imageUrl,
  icon,
  accentColor,
  onClick,
}) => {
  return (
    <Card
      hoverable
      bordered={false}
      style={{
        borderRadius: 18,
        height: "100%",
        boxShadow: "0 16px 40px rgba(15,23,42,0.12)",
        overflow: "hidden",
      }}
      bodyStyle={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}
      cover={
        <div
          style={{
            height: 140,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      }
    >
      <Space align="start" style={{ width: "100%", justifyContent: "space-between" }}>
        <Space align="start">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              fontSize: 22,
            }}
          >
            {icon}
          </div>
          <div>
            <Text strong style={{ fontSize: 16, display: "block" }}>
              {title}
            </Text>
            <Tag
              style={{
                marginTop: 4,
                borderRadius: 999,
                border: "none",
                backgroundColor: "#eff6ff",
                color: "#4b5563",
                fontSize: 11,
              }}
            >
              {roleLabel}
            </Tag>
          </div>
        </Space>
      </Space>

      <Paragraph type="secondary" style={{ margin: "8px 0 0 0", fontSize: 13 }}>
        {description}
      </Paragraph>

      <Button
        type={title === "School Login" ? "primary" : "default"}
        block
        onClick={onClick}
        style={{
          marginTop: 8,
          borderRadius: 999,
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

const App: React.FC = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #dbeafe 0, #f1f5f9 40%, #e0e7ff 100%)",
      }}
    >
      {/* Top bar */}
      <Header
        style={{
          background: "rgba(15,23,42,0.97)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          borderBottom: "1px solid rgba(148,163,184,0.4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: "linear-gradient(135deg, #38bdf8, #6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 17,
              color: "white",
            }}
          >
            SM
          </div>
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 0.3,
                color: "white",
              }}
            >
              School Management Portal
            </div>
            <div
              style={{
                fontSize: 11,
                opacity: 0.8,
                color: "#e5e7eb",
              }}
            >
              Unified access for Schools · Parents · Pupils
            </div>
          </div>
        </div>
      </Header>

      {/* Main content */}
      <Content style={{ padding: "40px 20px 28px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          {/* Hero section */}
          <Row gutter={[40, 32]} align="middle">
            {/* Left: hero text */}
            <Col xs={24} md={13}>
              <Title
                level={2}
                style={{
                  marginBottom: 10,
                  fontWeight: 800,
                  letterSpacing: 0.2,
                }}
              >
                One portal for{" "}
                <span style={{ color: "#2563eb" }}>
                  schools, parents
                </span>{" "}
                and{" "}
                <span style={{ color: "#7c3aed" }}>pupils</span>.
              </Title>
              <Paragraph
                type="secondary"
                style={{
                  maxWidth: 620,
                  fontSize: 15,
                  marginBottom: 18,
                }}
              >
                A modern web application built with React and Spring Boot,
                hosted on AWS. Schools manage their operations, parents stay
                connected and pupils access learning — from anywhere.
              </Paragraph>

              <Space
                direction="vertical"
                size={6}
                style={{ fontSize: 13, color: "#4b5563" }}
              >
                <Text>
                  • <Text strong>Role-based access</Text> for school staff,
                  parents and pupils.
                </Text>
                <Text>
                  • Designed as a <Text strong>3-tier architecture</Text>{" "}
                  (frontend, microservices, database).
                </Text>
                <Text>
                  • Ready to deploy on <Text strong>AWS S3 + CloudFront</Text>{" "}
                  as a static React app.
                </Text>
              </Space>
            </Col>

            {/* Right: hero illustration */}
            <Col xs={24} md={11}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 20,
                  padding: 0,
                  boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
                  overflow: "hidden",
                  background: "#0f172a",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div
                  style={{
                    height: 230,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Illustration from unDraw / similar style */}
                  <img
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
                    alt="School dashboard illustration"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: 0.95,
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "14px 18px",
                    borderTop: "1px solid rgba(148,163,184,0.4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background:
                      "linear-gradient(to right, #0f172a, #020617)",
                  }}
                >
                  <div>
                    <Text
                      style={{
                        color: "#e5e7eb",
                        fontSize: 13,
                      }}
                    >
                      Frontend: React · Backend: Spring Boot
                    </Text>
                    <br />
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 11,
                      }}
                    >
                      This environment will later be deployed via CloudFront.
                    </Text>
                  </div>
                  <Tag
                    color="blue"
                    style={{
                      borderRadius: 999,
                      fontSize: 11,
                      padding: "2px 10px",
                    }}
                  >
                    DEV PREVIEW
                  </Tag>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Login cards row */}
          <div style={{ marginTop: 40 }}>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <LoginOptionCard
                  title="School Login"
                  roleLabel="Admin & Staff"
                  description="Access the administration area to manage website content, parent communications, payments and pupil information."
                  buttonText="School Portal"
                  icon={<BankOutlined />}
                  accentColor="#2563eb"
                  imageUrl="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  onClick={() =>
                    alert("School login page will be added later")
                  }
                />
              </Col>
              <Col xs={24} md={8}>
                <LoginOptionCard
                  title="Parent Login"
                  roleLabel="Parents"
                  description="View messages, book parents evenings, complete surveys and make secure online payments to school."
                  buttonText="Parent Portal"
                  icon={<TeamOutlined />}
                  accentColor="#16a34a"
                  imageUrl="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80"
                  onClick={() =>
                    alert("Parent login page will be added later")
                  }
                />
              </Col>
              <Col xs={24} md={8}>
                <LoginOptionCard
                  title="Pupil Login"
                  roleLabel="Pupils / Students"
                  description="Access homework, announcements and learning resources assigned by teachers in a secure pupil space."
                  buttonText="Pupil Portal"
                  icon={<ReadOutlined />}
                  accentColor="#f97316"
                  imageUrl="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
                  onClick={() =>
                    alert("Pupil login page will be added later")
                  }
                />
              </Col>
            </Row>
          </div>

          {/* Helper text */}
          <div style={{ marginTop: 28 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Next: we will create dedicated routes and pages for each role
              (school, parent, pupil) and connect these cards to those screens.
            </Text>
          </div>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          background: "transparent",
          paddingTop: 8,
        }}
      >
        <Text type="secondary" style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} School Management System · React frontend · AWS-ready
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;
