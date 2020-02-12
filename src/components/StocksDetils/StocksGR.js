import React from "react"
import Styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faClock, faCircle } from "@fortawesome/free-solid-svg-icons";
import { COLORS, MEDIA_QUERIES } from '../css/styles'

const SliderresWraper = Styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
`;

const SliderpWraper = Styled.div`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  margin: 0px 0px 5px 90px;
}
   color: #6C757D;
   font-size: 14px;
   margin: 0px 0px 5px 120px;
`;

const IconWraper = Styled(FontAwesomeIcon)`
   color: black;
   margin-bottom: 11px;
   font-size:10px;
   margin-left: ${props => props.data - 1.5 + "%"};
`;

const SliderWraper = Styled.div`
  background-image: linear-gradient(to right, rgba(225, 85, 85, 1) 0, rgba(135, 126, 95, 1) 44%, rgba(1, 187, 110, 1) 100%);
  height: 10px;
  width: 100%;
  margin-top: 7px;
`;

const Wraper52W = Styled.div`
  font-size: 15px;
  font-weight: bolder;
  padding: ${props => props.primary ? "0px 0px 0px 10px" : "0px 10px 0px "};
`;

const Wraperpara = Styled.p`
  display: flex;
  font-size: 12px;
  margin-left: 30px;
  color: #6C757D;
`;

const FontWraper = Styled(FontAwesomeIcon)`
  font-Size: 30px;
  color: ${props => (parseFloat(props.data).toString()[0] === '-' ? `${COLORS.red}` : `${COLORS.green}`)};
  transform: ${props => (parseFloat(props.data).toString()[0] === '-' ? 'rotate(180deg);' : 'rotate(0deg)')}; 
`;
const Wraperspan2 = Styled.span`
  font-size: 20px;
  padding: 8px;
  color: ${props => (parseFloat(props.data).toString()[0] === '-' ? `${COLORS.red}` : `${COLORS.green}`)};
`;

const Wraperspan1 = Styled.span`
   font-size: 26px;
   padding: 8px;
`;

const Wrapergr = Styled.div`
@media (max-width: 768px) {
  margin-left: 1%;
}
  display: inline-block;
  margin: 20px 5px 5px 20px;
`;

const Wraperh6 = Styled.h6`
@media (max-width: 768px) {
  display: block;
  font-size: 15px;
}
 color: ${COLORS.darkSilver};
  margin-bottom: -5px;
`;

const Wraperh1 = Styled.h2`
@media (max-width: 768px) {
  font-size: 30px;
}
  color: ${COLORS.black};
  text-align: left;
`;

const Wraper = Styled.div`
@media (max-width: 768px) {
  margin-left: 0%;
  padding-left: 1%;
  padding: 0px;
  width: 100%;
}
  box-sizing: border-box;
  border: 1px solid ${COLORS.borderColor};
  position: relative;
  z-index: 10;
  background: ${COLORS.white};
  padding: 15px;
  width: 32%;
  height: 430px;
 // max-width: 600px;
 // margin: 0px 0% 0% 4%;
`;

const StocksGR = props => {
  let high52 = props.gr.FiftyTwoWeekHigh
  let low52 = props.gr.FiftyTwoWeekLow
  let LastP = props.gr.LastPrice
  var result = ((LastP - low52) * 100) / (high52 - low52)
  console.log(props)

  return <Wraper id="StocksGR">
    <h1>{props.gr.Name} ({props.gr.ticker}) </h1>
    <Wraperh6><label style={{ paddingRight: "3px", color: "#6C757D" }}>Industry: </label>{props.gr.Industry}<label style={{ paddingRight: "3px", color: "#6C757D" }}>    |     Sector: </label>{props.gr.Sector}</Wraperh6>
    <hr />
    <Wrapergr>
      <FontWraper icon={faArrowUp} data={props.gr.ChangePrice} />
      <Wraperspan1>{props.gr.LastPrice}</Wraperspan1>
      <Wraperspan2 data={props.gr.ChangePrice}>{props.gr.ChangePrice}</Wraperspan2>
      <Wraperspan2 data={props.gr.ChangePercent}>({props.gr.ChangePercent})</Wraperspan2>
      <Wraperpara><FontAwesomeIcon icon={faClock} style={{ Color: "#6C757D", fontSize: "18px", marginRight: "5px" }} />{props.gr.lastUpdated}</Wraperpara>
    </Wrapergr>
    <hr />


    <SliderpWraper>52 Week L/H</SliderpWraper>
    <SliderresWraper>
      <Wraper52W>{props.gr.FiftyTwoWeekLow}</Wraper52W>
      <SliderWraper>
        <IconWraper icon={faCircle} data={result > 100 ? "100" : `${result}`} data1={0} />
      </SliderWraper>
      <Wraper52W>{props.gr.FiftyTwoWeekHigh}</Wraper52W>
    </SliderresWraper >
    <br></br>
    <div class="alert alert-primary" role="alert">
      This website only shows End-Of-The-Day or Previous Day's prices.
      </div>

  </Wraper >
}

export default StocksGR
