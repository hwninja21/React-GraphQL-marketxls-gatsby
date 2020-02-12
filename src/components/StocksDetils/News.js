import React from "react"
import Styled from "styled-components"
import { MEDIA_QUERIES, COLORS, FONT_SIZES } from '../css/styles'

const Wraperheading = Styled.p`
  color: ${COLORS.black};
  margin-top: 10px;
  text-align: center;
  font-size: ${FONT_SIZES.xlarge};
  font-weight: 480;
`;
const Wraperspan = Styled.span`
  display: block;
`;

const Wraperlink = Styled.a`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  width: 100%;
}
  line-height: 20px;
  display: block;
  width: 100%;
  :hover {
    text-decoration: none;
    opacity: 0.6;
  }
`;

const WraperNews = Styled.div`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  display: block;
}

  background-color: ${COLORS.lightSilver};
  margin: 15px;
  padding: 10px;
  display: block;
`;

const Wraper = Styled.div`
  overflow-y:scroll;
  height:330px;
  float: right;
  width: 100%;

  `;

const MainWraper = Styled.div`
@media (max-width: ${MEDIA_QUERIES['mobile']}px) {
  width: 98%;
  margin: 10px 1% 0% 1%;
}
  box-sizing: border-box;
  border: 1px solid ${COLORS.borderColor};
  position: relative;
  z-index: 10;
  background: ${COLORS.white};
  float: right;
  width: 32%;
  margin: 0px 0% 0px 1px;
  padding-bottom: 20px;
  font-size: ${FONT_SIZES.small};
  height: 430px;
`;

const News = ({ data }) => {

  const linesArr = data.news.split("\n")
  let elementSplit = [];
  linesArr.forEach(element => {
    var ele = element.split(",")
    elementSplit.push(ele)
  });
  elementSplit.pop()
  elementSplit.shift()
  const renderElement = () => {
    return elementSplit.map((ele, index) => {
      return (
        <div key={index}>
          <WraperNews > <Wraperlink href={ele[2]} >{ele[3]}</Wraperlink> <Wraperspan>{ele[0]}<br />{ele[1]}</Wraperspan></WraperNews>
        </div>
      )
    })
  }

  return (
    <MainWraper id="News">
      <Wraperheading><h2>Stock News</h2></Wraperheading>
      <hr />
      <Wraper>
        {renderElement()}
      </Wraper>
    </MainWraper>
  )

}

export default News;
