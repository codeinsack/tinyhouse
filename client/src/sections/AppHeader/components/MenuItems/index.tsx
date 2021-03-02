import React from "react";
import { Button, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Viewer } from "../../../../lib/types";

interface Props {
  viewer: Viewer;
}

const { Item, SubMenu } = Menu;

export const MenuItems = ({ viewer }: Props) => {
  const subMenuLogin = viewer.id ? (
    <SubMenu title={<Avatar src={viewer.avatar} />}>
      <Item key="/user">
        <UserOutlined />
        Profile
      </Item>
      <Item key="/logout">
        <LogoutOutlined />
        Logout
      </Item>
    </SubMenu>
  ) : (
    <Item key="/login">
      <Link to="/login">
        <Button type="primary">Sign In</Button>
      </Link>
    </Item>
  );

  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">
          <HomeOutlined />
          Host
        </Link>
      </Item>
      {subMenuLogin}
    </Menu>
  );
};
