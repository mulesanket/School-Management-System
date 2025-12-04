import React from "react";
import {
  Layout,
  Card,
  Button,
  Row,
  Col,
  Typography,
  Tag,
  Space,
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
  icon: React.ReactNode;
  accentColor: string;
  onClick?: () => void;
};

const LoginOptionCard: React.FC<LoginOptionCardProps> = ({
  title,
  roleLabel,
  description,
  buttonText,
  icon,
  accentColor,
  onClick,
}) => {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: 16,
        height: "100%",
        boxShadow:
          "0 10px 25px rgba(15, 23, 42, 0.08)",
        display: "flex",
        flexDirection: "column",
        padding: 4,
      }}
      bodyStyle={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}
    >
      <Space align="start" style={{ width: "100%", justifyContent: "space-between" }}>
        <Space align="center">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
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
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Text strong style={{ fontSize: 16 }}>
                {title}
              </Text>
            </div>
            <Tag
              style={{
                marginTop: 4,
                borderRadius: 999,
                border: "none",
                backgroundColor: "#f3f4ff",
                color: "#4b5563",
                fontSize: 11,
              }}
            >
              {roleLabel}
            </Tag>
          </div>
        </Space>
      </Space>

      <Paragraph type="secondary" style={{ margin: 0, flex: 1 }}>
        {description}
      </Paragraph>

      <Button
        type={title === "School Login" ? "primary" : "default"}
        block
        onClick={onClick}
        style={{
          marginTop: 4,
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
          "radial-gradient(circle at top left, #e0f2fe 0, #f9fafb 40%, #eef2ff 100%)",
      }}
    >
      {/* Top bar */}
      <Header
        style={{
          background: "rgba(15,23,42,0.96)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          borderBottom: "1px solid rgba(148,163,184,0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "white",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, #38bdf8, #6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 16,
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
              }}
            >
              School Management Portal
            </div>
            <div
              style={{
                fontSize: 11,
                opacity: 0.8,
              }}
            >
              Powered by React on AWS
            </div>
          </div>
        </div>
      </Header>

      {/* Main content */}
      <Content style={{ padding: "36px 20px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Hero section */}
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={14}>
              <Title level={2} style={{ marginBottom: 12 }}>
                One portal for{" "}
                <span style={{ color: "#2563eb" }}>
                  schools, parents and pupils
                </span>
              </Title>
              <Paragraph
                type="secondary"
                style={{
                  maxWidth: 620,
                  fontSize: 15,
                  marginBottom: 20,
                }}
              >
                A central, cloud-hosted system where schools manage
                communication, payments and learning. Parents stay informed.
                Pupils access the things they need, from anywhere.
              </Paragraph>

              <Space direction="vertical" size={6}>
                <Text>
                  • Built as a modern{" "}
                  <Text strong>React frontend</Text>, backed by Spring Boot
                  microservices.
                </Text>
                <Text>
                  • Hosted on <Text strong>AWS</Text> using S3, CloudFront,
                  EKS and RDS.
                </Text>
                <Text>
                  • Designed for different roles:{" "}
                  <Text strong>School Admin</Text>,{" "}
                  <Text strong>Parents</Text> and{" "}
                  <Text strong>Pupils</Text>.
                </Text>
              </Space>
            </Col>

            {/* Right side: login tiles */}
            <Col xs={24} md={10}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <LoginOptionCard
                    title="School Login"
                    roleLabel="Admin & Staff"
                    description="Access the full administration area to manage website content, parent communications, payments and pupil records."
                    buttonText="School Portal"
                    icon={<BankOutlined />}
                    accentColor="#2563eb"
                    onClick={() =>
                      alert("School login page will be added later")
                    }
                  />
                </Col>
                <Col span={12}>
                  <LoginOptionCard
                    title="Parent Login"
                    roleLabel="Parents"
                    description="View messages, book parents evenings, complete surveys and make secure payments."
                    buttonText="Parent Portal"
                    icon={<TeamOutlined />}
                    accentColor="#22c55e"
                    onClick={() =>
                      alert("Parent login page will be added later")
                    }
                  />
                </Col>
                <Col span={12}>
                  <LoginOptionCard
                    title="Pupil Login"
                    roleLabel="Pupils / Students"
                    description="Access homework, class updates and pupil-specific resources assigned by school."
                    buttonText="Pupil Portal"
                    icon={<ReadOutlined />}
                    accentColor="#f97316"
                    onClick={() =>
                      alert("Pupil login page will be added later")
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Helper text under cards */}
          <div style={{ marginTop: 32 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Next steps: we will create separate login pages and dashboards for
              each role, and connect these buttons to the correct routes.
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
          © {new Date().getFullYear()} School Management System • Frontend in
          React • Deployed on AWS
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;
