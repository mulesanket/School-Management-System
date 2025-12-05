import React from "react";
import { Layout, Card, Row, Col, Typography, List, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const ParentDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Dummy data – later this will come from Spring Boot microservices
  const pupilName = "Oliver Smith";
  const className = "Year 5";
  const unreadMessages = 3;
  const pendingPayments = 1;

  const upcomingEvents = [
    { id: 1, title: "Parent–Teacher Meeting", date: "12 Dec 2025" },
    { id: 2, title: "Sports Day", date: "18 Dec 2025" },
  ];

  const recentAnnouncements = [
    "Homework for Week 3 has been uploaded.",
    "School will remain closed on 15th Dec.",
    "New lunch menu is now available.",
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Header
        style={{
          background: "#0d3943",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        <span>Parent Dashboard</span>
        <div style={{ display: "flex", gap: 8 }}>
          <Button size="small" onClick={() => navigate("/", { replace: true })}>
            Home
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => navigate("/parent/login", { replace: true })}
          >
            Logout
          </Button>
        </div>
      </Header>

      <Content style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Title level={3} style={{ marginBottom: 8 }}>
            Welcome, {pupilName}'s Parent
          </Title>
          <Text type="secondary">
            This is a dummy dashboard. Later we will load real data from Spring Boot services.
          </Text>

          {/* Top summary cards */}
          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Pupil</Text>
                <Title level={4} style={{ marginTop: 8, marginBottom: 4 }}>
                  {pupilName}
                </Title>
                <Tag color="blue">{className}</Tag>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Unread Messages</Text>
                <Title level={3} style={{ marginTop: 8 }}>
                  {unreadMessages}
                </Title>
                <Button type="link" style={{ padding: 0, marginTop: 4 }}>
                  View messages
                </Button>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card style={{ borderRadius: 10 }}>
                <Text type="secondary">Pending Payments</Text>
                <Title level={3} style={{ marginTop: 8 }}>
                  {pendingPayments}
                </Title>
                <Button type="link" style={{ padding: 0, marginTop: 4 }}>
                  Go to payments
                </Button>
              </Card>
            </Col>
          </Row>

          {/* Lower section: events + announcements */}
          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col xs={24} md={12}>
              <Card
                title="Upcoming Events"
                style={{ borderRadius: 10 }}
                bodyStyle={{ paddingTop: 12 }}
              >
                <List
                  dataSource={upcomingEvents}
                  renderItem={(item) => (
                    <List.Item>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Text strong>{item.title}</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          {item.date}
                        </Text>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card
                title="Recent Announcements"
                style={{ borderRadius: 10 }}
                bodyStyle={{ paddingTop: 12 }}
              >
                <List
                  dataSource={recentAnnouncements}
                  renderItem={(item, index) => (
                    <List.Item>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ParentDashboardPage;
