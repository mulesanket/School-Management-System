import React from "react";
import { Layout, Card, Row, Col, Typography } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const SchoolDashboardPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header
        style={{
          background: "#0d3943",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        School Dashboard
      </Header>

      <Content style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Title level={3} style={{ marginBottom: 16 }}>
            Welcome, School Admin
          </Title>
          <Text type="secondary">
            This is a simple placeholder dashboard. Later we will connect real
            data from Spring Boot microservices.
          </Text>

          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Total Parents</Text>
                <Title level={3} style={{ marginTop: 8 }}>
                  0
                </Title>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Total Pupils</Text>
                <Title level={3} style={{ marginTop: 8 }}>
                  0
                </Title>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Pending Messages</Text>
                <Title level={3} style={{ marginTop: 8 }}>
                  0
                </Title>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default SchoolDashboardPage;
