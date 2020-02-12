import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

import NavSeparator from "./NavSeparator"

const Wrapper = styled.nav`
  display: flex;
  height: 50px;
  background: "#D6AF47";
  margin-top: 0.5rem ;
  margin-right: 2rem;
  margin-left: 1rem;
  background: green;
`
const WraperLink = styled(Link)`
//  flex: 0 0 auto;
  display: block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  padding: 0 1rem;
  color: currentColor;
  background: #595959;
  &:hover{
    color: currentcolor;
    background: #424242;
    text-decoration: none;
  }
  &:focus {
  }
`

const NavLink = styled.a`
  flex: 0 0 auto;
  display: block;
  line-height: 3.125rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  padding: 0 1rem;
  color: currentColor;
  background: ${props => props.primary ? "#595959" : "#D6AF47" };;
  &:hover{
    color: currentcolor;
    background: ${props => props.primary ? "#424242" : "#D6AF47" };;
    text-decoration: none;
  }
  &:focus {
  }
  &:active {
    color: currentcolor;
    background: ${props => (props.primary ? "#424242" : "#D6AF47")};
    text-decoration: none;
  }
`

const NavLinks = () => (
  <Wrapper>
    <NavLink to="/">Sale: 1-877-778-8358</NavLink>
    <NavSeparator />
    <WraperLink to="/">
      Home
    </WraperLink>
    <NavSeparator />
    <NavLink href="https://marketxls.com/marketxls-features-showcase/" primary>Features
    </NavLink>
    <NavSeparator />
    <NavLink href="https://marketxls.com/pricing-global-tabs/" primary>Pricing</NavLink>
    <NavSeparator />
    <NavLink href="https://marketxls.com/blog/" primary>Blog</NavLink>
    
    <NavLink href="https://marketxls.com/contact-us/" primary>Support</NavLink>
  </Wrapper>
)

export default NavLinks
