import React from "react";
import { Layout, Card, Button, Row, Col, Typography } from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f7fb" }}>
      {/* Top bar */}
      <Header
        style={{
          background: "#0d3943",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          School Management Portal
        </div>
      </Header>

      {/* Main content */}
      <Content style={{ padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {/* Hero text */}
          <div style={{ marginBottom: 32 }}>
            <Title level={2} style={{ marginBottom: 8 }}>
              Welcome to the School Management System
            </Title>
            <Paragraph type="secondary" style={{ maxWidth: 700 }}>
              A central portal for schools, parents and pupils to manage
              communication, payments and learning — all in one place.
            </Paragraph>
          </div>

          {/* 3 login cards */}
          <Row gutter={[24, 24]}>
            {/* School Login */}
            <Col xs={24} md={8}>
              <Card
                title="School Login"
                bordered
                style={{ borderRadius: 12, height: "100%" }}
                headStyle={{ fontWeight: 600 }}
              >
                <Paragraph type="secondary">
                  For school admins and staff to manage website content, parents,
                  pupils and payments.
                </Paragraph>
                <Button
                  type="primary"
                  block
                  onClick={() => alert("School login will go here later")}
                >
                  Go to School Login
                </Button>
              </Card>
            </Col>

            {/* Parent Login */}
            <Col xs={24} md={8}>
              <Card
                title="Parent Login"
                bordered
                style={{ borderRadius: 12, height: "100%" }}
                headStyle={{ fontWeight: 600 }}
              >
                <Paragraph type="secondary">
                  For parents to view messages, book parents evenings, complete
                  surveys and make payments.
                </Paragraph>
                <Button
                  block
                  onClick={() => alert("Parent login will go here later")}
                >
                  Go to Parent Login
                </Button>
              </Card>
            </Col>

            {/* Pupil Login */}
            <Col xs={24} md={8}>
              <Card
                title="Pupil Login"
                bordered
                style={{ borderRadius: 12, height: "100%" }}
                headStyle={{ fontWeight: 600 }}
              >
                <Paragraph type="secondary">
                  For pupils to access homework, class updates and
                  pupil-specific information.
                </Paragraph>
                <Button
                  block
                  onClick={() => alert("Pupil login will go here later")}
                >
                  Go to Pupil Login
                </Button>
              </Card>
            </Col>
          </Row>

          {/* Small helper text */}
          <div style={{ marginTop: 32 }}>
            <Text type="secondary">
              Later we will link each button to its own login page and role-based
              dashboard (school, parent, pupil).
            </Text>
          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: "center", background: "#f5f7fb" }}>
        <Text type="secondary">
          © {new Date().getFullYear()} School Management System
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;
