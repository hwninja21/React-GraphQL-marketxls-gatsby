import React from "react";

//import { Content } from '../components/Scaffold'
import Layout from "../components/Layout";
import BodyStyle from "../components/css/index.module.css";
import Search from "../components/search";
//import styled from "styled-components"

export default () => (
  <Layout>
    <div className={BodyStyle.containerFluid}>
      <div className={BodyStyle.homePage}>

        <h1 className="myClass" style={{ color: 'white' }}>Stock Research and Analysis</h1>
        <h3 className="myClass" style={{ color: 'white' }}><p>Financial strength, profitability, growth and risk metrics on stocks.</p></h3>
        <Search />

        <br></br>
        <h3 className="myClass" style={{ color: 'white' }}>Search for a stock like <a href="/stocks/msft">MSFT</a> , <a href="/stocks/aapl">AAPL</a> or <a href="/stocks/aapl">Microsoft</a> or <a href="/stocks/aapl">Apple</a> etc.</h3>
        <br></br>
        <h3 className="myClass" style={{ color: 'white' }}>(Updated daily after the Markets Close)</h3>

      </div>

    </div>

  </Layout>
);
