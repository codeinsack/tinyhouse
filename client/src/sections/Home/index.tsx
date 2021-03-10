import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout } from "antd";
import { HomeHero } from "./components";

import mapBackground from "./assets/map-background.jpg";
import { displayErrorMessage } from "../../lib/utils";
const { Content } = Layout;

export const Home = ({ history }: RouteComponentProps) => {
  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      history.push(`/listings/${trimmedValue}`);
    } else {
      displayErrorMessage("Please enter a valid search!");
    }
  };

  return (
    <Content
      className="home"
      style={{ backgroundImage: `url(${mapBackground})` }}
    >
      <HomeHero onSearch={onSearch} />
    </Content>
  );
};
