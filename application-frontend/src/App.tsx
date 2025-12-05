import React from "react";
import { Layout, Card, Button, Row, Col, Typography } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import SchoolLoginPage from "./features/school/SchoolLoginPage";
import SchoolDashboardPage from "./features/school/SchoolDashboardPage";
import ParentsListPage from "./features/school/ParentsListPage";
import ParentLoginPage from "./features/parents/ParentLoginPage";
import ParentRegisterPage from "./features/parents/ParentRegisterPage";
import PupilLoginPage from "./features/pupils/PupilLoginPage";
import PupilRegisterPage from "./features/pupils/PupilRegisterPage";


const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      {/* Top Bar */}
      <Header
        style={{
          background: "#0d3943",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        School Management System
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Title level={3} style={{ marginBottom: 32 }}>
            Select Your Portal
          </Title>

          <Row gutter={[24, 24]}>
            {/* School Login */}
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ borderRadius: 12 }}
                cover={
                  <img
                    src="/images/school.jpg"
                    alt="School"
                    style={{ height: 150, objectFit: "cover" }}
                  />
                }
              >
                <Title level={5}>School Login</Title>
                <Paragraph type="secondary" style={{ fontSize: 13 }}>
                  For school admins & staff.
                </Paragraph>
                <Button
                  type="primary"
                  block
                  onClick={() => navigate("/school/login")}
                >
                  Go to School Portal
                </Button>
              </Card>
            </Col>

            {/* Parent Login */}
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ borderRadius: 12 }}
                cover={
                  <img
                    src="/images/parents.jpg"
                    alt="Parents"
                    style={{ height: 150, objectFit: "cover" }}
                  />
                }
              >
                <Title level={5}>Parent Login</Title>
                <Paragraph type="secondary" style={{ fontSize: 13 }}>
                  For parents to stay connected.
                </Paragraph>
                <Button
                  block
                  onClick={() => navigate("/parent/login")}
                >
                  Go to Parent Portal
                </Button>
              </Card>
            </Col>

            {/* Pupil Login */}
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={{ borderRadius: 12 }}
                cover={
                  <img
                    src="/images/pupil.jpg"
                    alt="Pupil"
                    style={{ height: 150, objectFit: "cover" }}
                  />
                }
              >
                <Title level={5}>Pupil Login</Title>
                <Paragraph type="secondary" style={{ fontSize: 13 }}>
                  For students to access learning.
                </Paragraph>
                <Button
                  block
                  onClick={() => navigate("/pupil/login")}
                >
                  Go to Pupil Portal
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer style={{ textAlign: "center", padding: 12, fontSize: 12 }}>
        © {new Date().getFullYear()} School Management System
      </Footer>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/school/login" element={<SchoolLoginPage />} />
      <Route path="/school/dashboard" element={<SchoolDashboardPage />} />
      <Route path="/school/parents" element={<ParentsListPage />} />

      <Route path="/parent/login" element={<ParentLoginPage />} />
      <Route path="/parent/register" element={<ParentRegisterPage />} />

      <Route path="/pupil/login" element={<PupilLoginPage />} />
      <Route path="/pupil/register" element={<PupilRegisterPage />} />
    </Routes>
  );
};

export default App;
