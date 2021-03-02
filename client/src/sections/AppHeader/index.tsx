import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

import logo from "./assets/tinyhouse-logo.png";
import { MenuItems } from "./components";
import { Viewer } from "../../lib/types";

interface Props {
  viewer: Viewer;
}

const { Header } = Layout;

export const AppHeader = ({ viewer }: Props) => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Link to="/">
            <img src={logo} alt="App logo" />
          </Link>
        </div>
      </div>
      <div className="app-header__menu-section">
        <MenuItems viewer={viewer} />
      </div>
    </Header>
  );
};
