import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./APP.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/exchanges" element={<Exchanges />}></Route>
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                ></Route>
                <Route
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                ></Route>
                <Route path="/news" element={<News />}>
                  News
                </Route>
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              className={"footer"}
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoversse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to={"/"}>Home</Link>
              <Link to={"/Exchanges"}>Exchanges</Link>
              <Link to={"/News"}>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
