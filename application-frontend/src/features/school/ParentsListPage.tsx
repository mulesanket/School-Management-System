import React from "react";
import { Layout, Table, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

type ParentRow = {
  key: string;
  name: string;
  email: string;
  pupilName: string;
  status: string;
};

const mockParents: ParentRow[] = [
  {
    key: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    pupilName: "Oliver Smith",
    status: "Active",
  },
  {
    key: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    pupilName: "Emily Johnson",
    status: "Active",
  },
  {
    key: "3",
    name: "Mike Brown",
    email: "mike.brown@example.com",
    pupilName: "Noah Brown",
    status: "Inactive",
  },
];

const ParentsListPage: React.FC = () => {
  const navigate = useNavigate();

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
        <span>School – Parents</span>
        <Button
          type="default"
          size="small"
          onClick={() => navigate("/school/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Header>

      <Content style={{ padding: "24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Title level={3} style={{ marginBottom: 8 }}>
            Parents
          </Title>
          <Text type="secondary">
            This is a static list for now. Later we will replace it with data
            from a Spring Boot service.
          </Text>

          <div
            style={{
              marginTop: 20,
              background: "white",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Table
              dataSource={mockParents}
              pagination={{ pageSize: 5 }}
              columns={[
                { title: "Parent Name", dataIndex: "name", key: "name" },
                { title: "Email", dataIndex: "email", key: "email" },
                { title: "Pupil", dataIndex: "pupilName", key: "pupilName" },
                { title: "Status", dataIndex: "status", key: "status" },
              ]}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ParentsListPage;
