import React, { Component } from 'react'
import styled from 'styled-components'
import './images/bootstrap.min.css'
import Flogo from './images/ei.png'
import Flogo2 from './images/bizsparkstartup-resizes.png'
import Flogo3 from './images/barchart-logo-new.png'
import Flogo4 from './images/Quotemedialogo.png'

const Wrapper = styled.div`
  background-color: #222;
  height: 100%;
  color: whitesmoke;
  padding-top: 6rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  margin-top: 0px;
`;



const ParaWraper2 = styled.div`
 background-color: #FFFFFF;
 color: black;
 font-size: 1.05rem;
 text-align: center;
 margin-top: 2%;
`;

const ParaWraper1 = styled.div`
  background-color: #FFFFFF;
  color: black;
  font-size: 1rem;
  text-align: center;
  margin-top: -4rem;
  line-height: 1.8;
`;

const ParaWraper = styled.p`
  color: white;
  font-size: 1rem;
`;

const ImgWraper = styled.img`
  max-width: 165px;
  max-height: 165px;
  width: auto;
  height: auto;
  padding: 0.5rem;
`;

const FooterLink = styled.a`
  color: #2649D2;
  font-weight: bold;

  :hover {
    text-decoration: none;
    opacity: 0.7;
  }
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Legal
        <br />
              <br />
              <a href="https://marketxls.com/terms-of-use/">Terms of Use</a>
              <br />
              <a href="https://marketxls.com/privacy-policy/">Privacy Policy</a>
              <br />
              <a href="https://marketxls.com/disclaimer/">Disclaimer</a>
            </div>
            <div className="col-sm">
              Company
        <br />
              <br />
              <a href="https://marketxls.com/contact-us/">Contact us</a>
              <br />
              <a href="https://marketxls.com/about-us/">Team</a>
            </div>

            <div className="col-sm">
              Resources
        <br />
              <br />
              <a href="https://marketxls.com">MarketXLS Excep App</a>
              <br />
              <a href="https://marketxls.com/knowledge-base/">MarketXLS Knowledgebase</a>
              <br />
              <p><a href="/stocks">All stocks</a></p>
            </div>

            <div className="col-sm-4">
              Partners
        <br />
              <br />
              <ImgWraper src={Flogo2}></ImgWraper>
              <ImgWraper src={Flogo3}></ImgWraper>
              <ImgWraper src={Flogo}></ImgWraper>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <ParaWraper>
            Financial Market Data powered by Quotemedia.com. All rights reserved.
            View the Terms of Use. Data is either delayed by 15 minutes or is End
            of the Day, unless indicated otherwise.
    </ParaWraper>
          <ParaWraper>Copyright © MarketXLS Limited.</ParaWraper>
          <ParaWraper>
            All information provided “as is” for informational purposes only, not
            intended for trading purposes or advice. Read terms and conditions
            before using. Information provided in this solution is obtained from
            sources believed to be reliable. The publishers are not responsible
            for any errors or omissions contained herein or delivered through the
            software. Data and functionality of this software is subject to many
            factors including but not limited to internet connectivity, data
            interruptions, server breakdowns, trading halts etc.
    </ParaWraper>
          <br />
          <br />
          <br />
          <ParaWraper1>
            <p>
              <FooterLink href="https://www.quotemedia.com/coverage">Financial Market Data</FooterLink> copyright © 2019<FooterLink href="https://www.quotemedia.com"> QuoteMedia</FooterLink> . Data delayed 15 minutes unless otherwise indicated (view<FooterLink href="https://www.quotemedia.com/legal/tos/#times">  delay times</FooterLink> for all exchanges).<br />
              RT=Real-Time, EOD=End of Day, PD=Previous Day.<FooterLink href="https://www.quotemedia.com/coverage"> Market Data</FooterLink> powered by<FooterLink href="https://www.quotemedia.com">  QuoteMedia. Terms of Use.</FooterLink> </p>
            <ImgWraper src={Flogo4}></ImgWraper>
          </ParaWraper1>
          <ParaWraper2>
            <p>We are a Barchart Inc.'s Independent Software Vendor</p>
            <ImgWraper src={Flogo3}></ImgWraper>
          </ParaWraper2>
          <p>© 2019 Stock Research Tool • Powered by MarketXLS</p>
        </div>
      </Wrapper>
    )
  }
}

export default Footer
