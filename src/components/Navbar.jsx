import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="title">
          <Avatar src={icon} size="large" className={"logoCrypto"} />
          <Typography.Title level={1} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>

        <Menu theme="dark">
          <Menu.Item key="item1" icon={<HomeOutlined />} className={"fontSize"}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item key="item2" icon={<FundOutlined />} className={"fontSize"}>
            <Link to={"/cryptocurrencies"}>Cryptocurrency</Link>
          </Menu.Item>
          <Menu.Item
            key="item3"
            icon={<MoneyCollectOutlined />}
            className={"fontSize"}
          >
            <Link to={"/exchanges"}>Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="item4" icon={<BulbOutlined />} className={"fontSize"}>
            <Link to={"/news"}>News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
