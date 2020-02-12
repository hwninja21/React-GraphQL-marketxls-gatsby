import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  COLORS,
  TRANSITION,
  MEDIA_QUERIES,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
  Similarstock_HEIGHT,
} from "../css/styles"

const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: black;
  opacity: 0.8;
  height: ${Similarstock_HEIGHT};
  padding: ${MARGIN.default};
  position: sticky;
  position: -webkit-sticky;
  top: 61px;
  z-index: 11;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: ${SHADOW};
  // overflow-x: scroll;
  transition: ${TRANSITION};

  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    padding: 0px 0px 0px 0px;
  }
`

const WraperUL = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0px;
  width: 100%;
  @media (max-width: ${MEDIA_QUERIES["desktop"]}px) {
    overflow-x: scroll;
  }
`

const Wraperli = styled.span`
  margin: 20px 20px;
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${COLORS.white};
  text-decoration: None;
  white-space: nowrap;
  &:hover {
    text-decoration: None;
    color: ${props =>
    props.primary ? `${COLORS.white}` : `${COLORS.darkSilver}`};
  }
`

const Similar = props => {
  if (!props.data) {
    return null
  }
  let arr = props.data.replace(/[\[\]']+/g, "").split(",")
  console.log(props.data)

  const renderLinks = () => {
    return arr.map(ele => {
      return (
        <div>
          <Wraperli>
            <a href={`/stocks/${ele.toLowerCase().trim()}`} style={{ color: "inherit" }}> {ele}</a>
          </Wraperli>
        </div>
      )
    })
  }
  return (
    <Wraper>
      <WraperUL>
        <Wraperli primary>Similar Stocks</Wraperli>
        {/* {arr.map(arr => {
          return (
            <div>
              <Wraperli>
                <Link to={`stocks/${arr.toLowerCase()}`} />
              </Wraperli>
            </div>
          )
        })} */}
        {renderLinks()}
      </WraperUL>
    </Wraper>
  )
}

export default Similar
