import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import {
  COLORS,
  TRANSITION,
  MEDIA_QUERIES,
  HEADER_HEIGHT,
  FONT_WEIGHTS,
  MARGIN,
  SHADOW,
} from '../css/styles'


const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: ${COLORS['white']};
  height: ${HEADER_HEIGHT};
//  padding: ${MARGIN.default};
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 11;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: ${SHADOW};
 // overflow-x: scroll;
  transition: ${TRANSITION};
  border-top: ${COLORS.gold} 4px solid;
  border-image: ${`linear-gradient(to left, ${COLORS.gold} 0%, ${
  COLORS.semiGold
  } 100%)`};
  border-image-slice: 1;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    padding: 0px 0px 0px 0px;
  }
`

const NavLinks = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(7, max-content);
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['desktop']}px) {
    overflow-x: scroll;
  }
`

const NavLink = styled(AnchorLink)`
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${COLORS.blue};
  text-decoration: None;
  width: 100%;
  &:hover {
    text-decoration: None;
  }
`

const Header = (props) => (
  <HeaderBar>
    <NavLinks>
      <NavLink offset='110' href="#StocksGR">{props.data}</NavLink>
      <NavLink offset='110' href="#abcdef-007">Charts</NavLink>
      <NavLink offset='110' href="#StockAnalysis1">Profitability & Growth rates</NavLink>
      <NavLink offset='110' href="#StockAnalysis2">Margins & Risks</NavLink>
      <NavLink offset='110' href="#StockAnalysis">Stock Analysis & Stock Yield</NavLink>
      <NavLink offset='110' href="#News">News</NavLink>
    </NavLinks>
  </HeaderBar>
)

export default Header