import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
// import "./index.css";

import User from "../pages/User";
import Students from "../pages/Students";
import Post from "../pages/Post";
import Products from "../pages/Products";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("1");

  const sideMenuItems = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: "Users",
    },
    {
      key: "2",
      icon: React.createElement(VideoCameraOutlined),
      label: "Students",
    },
    {
      key: "3",
      icon: React.createElement(UploadOutlined),
      label: "Post",
    },
    {
      key: "4",
      icon: React.createElement(UploadOutlined),
      label: "Products",
    },
    {
      key: "5",
      icon: React.createElement(UserOutlined),
      label: "SignIn",
    },
    {
      key: "6",
      icon: React.createElement(UserOutlined),
      label: "SignUp",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="text-white text-xl font-bold">Dashboard</div>
      </Header>

      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => console.log("breakpoint:", broken)}
          onCollapse={(collapsed, type) =>
            console.log("collapse:", collapsed, type)
          }
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={({ key }) => setSelectedKey(key)}
            items={sideMenuItems}
          />
        </Sider>

        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              margin: 0,
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: 360,
            }}
          >
            {selectedKey === "1" && <User />}
            {selectedKey === "2" && <Students />}
            {selectedKey === "3" && <Post />}
            {selectedKey === "4" && <Products />}
            {selectedKey === "5" && <SignIn />}
            {selectedKey === "6" && <SignUp />}
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Siz
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
