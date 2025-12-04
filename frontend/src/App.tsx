import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Input, Avatar, Badge, Card, Row, Col, Button } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  MailOutlined,
  BellOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Sidebar: React.FC = () => {
  return (
    <Sider width={240} style={{ minHeight: '100vh', background: '#0d3943' }}>
      <div style={{ padding: 20, color: 'white', fontWeight: 700, fontSize: 18 }}>
        <img src="https://via.placeholder.com/36" alt="logo" style={{ marginRight: 8, verticalAlign: 'middle' }} />
        <span style={{ verticalAlign: 'middle' }}>SchoolSpider</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ background: 'transparent', borderRight: 'none' }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          Website Area
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>Parents Area</Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>Pupil Area</Menu.Item>
        <Menu.Item key="5" icon={<MailOutlined />}>Payments</Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>Settings</Menu.Item>
      </Menu>
    </Sider>
  );
};

const Topbar: React.FC = () => {
  return (
    <Header style={{ background: '#fff', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <Search placeholder="Search parents, pupils and staff" style={{ width: 420 }} />
      <div style={{ flex: 1 }} />
      <Button type="text" icon={<BellOutlined />} />
      <Badge dot>
        <Button type="text" icon={<MailOutlined />} />
      </Badge>
      <Avatar style={{ backgroundColor: '#87d068' }}>SM</Avatar>
    </Header>
  );
};

const SubscriptionCard: React.FC<{ title: string; tag?: string }> = ({ title, tag }) => (
  <Card bordered style={{ borderRadius: 8 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div style={{ color: '#6b7280', marginTop: 6 }}>Included in your package for FREE!</div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" size="small">Show me how this works</Button>
        </div>
      </div>
      <div>
        <div style={{ background: '#06b6d4', color: 'white', padding: '6px 10px', borderRadius: 20 }}>{tag ?? 'INCLUDED'}</div>
      </div>
    </div>
  </Card>
);

const StatCard: React.FC<{ title: string; value: React.ReactNode }> = ({ title, value }) => (
  <Card bordered style={{ borderRadius: 8 }}>
    <div style={{ fontSize: 12, color: '#6b7280' }}>{title}</div>
    <div style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>{value}</div>
    <div style={{ marginTop: 12 }}><a>View all →</a></div>
  </Card>
);

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Your Subscription Usage <span style={{ fontSize: 12, color: '#6b7280' }}>Using 0%</span></h2>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="School Website Manager" /></Col>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="Parent Communications" /></Col>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="Parents Evenings" /></Col>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="Parent Surveys" /></Col>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="Parent Payments" /></Col>
        <Col xs={24} sm={12} lg={8}><SubscriptionCard title="Translations" tag="Add" /></Col>
      </Row>

      <div style={{ height: 20 }} />

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}><StatCard title="Unprocessed Items" value={0} /></Col>
        <Col xs={24} sm={12} md={6}><StatCard title="Unprocessed Items Total" value={'£0.00'} /></Col>
        <Col xs={24} sm={12} md={6}><StatCard title="Unprocessed Clubs/Lunches" value={0} /></Col>
        <Col xs={24} sm={12} md={6}><StatCard title="Unprocessed Vouchers" value={0} /></Col>
      </Row>

      <div style={{ height: 24 }} />

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Text Message Credits Used" style={{ borderRadius: 8, minHeight: 200 }}>
            <div style={{ color: '#9ca3af' }}>Chart placeholder</div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Parent Messaging" style={{ borderRadius: 8, minHeight: 200 }}>
            <ul>
              <li>holiday — 25</li>
              <li>Test — 25</li>
              <li>Testing123 — 2</li>
            </ul>
            <div style={{ marginTop: 12 }}><Button type="primary">Send Message</Button></div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const AppShell: React.FC = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Topbar />
        <Content style={{ background: '#f6f7fb', minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<div style={{ padding: 24 }}>Page not found</div>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default function App() {
  return <AppShell />;
}
