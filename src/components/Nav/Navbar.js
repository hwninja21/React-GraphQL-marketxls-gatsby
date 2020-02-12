import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import rem from '../../utils/rem'
import { mobile, mobile1, mobile2, mobile3 } from '../../utils/media'
import NavLinks from './NavLinks'
import MobileNavbar from './MobileNavbar'
import logo from '../images/mx.png'
import Search from '../search'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 0%;
  margin-bottom: 0%;
 // position: fixed;
  box-sizing: border-box;
//  z-index: 12;
  width: 100%;
  height: 70px;
  font-size: ${rem(15)};
  background: #FFFFFF;
  transition: background 300ms ease-out;
  color: white;

  a {
    text-decoration: none;
  }
`

const NormalNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  `

const LogoLink = styled(Link).attrs({
  to: '/',
  'aria-label': 'home',
})`
  display: block;
  margin-left: 4%;
  margin-top: 20px;
  color: currentColor;
`

const MiddleWraper = styled.div`
   max-width: 330px;
   width: 100%;
  // float: left;
   margin-right: 10px;
   ${mobile2(css`
    display: none;
  `)} 
`;

const EndWraper = styled.div`
   display: flex;
   ${mobile(css`
    display: none;
  `)} 
`;

const ImageWraper = styled.img`
   width: 180px;
   ${mobile3(css`
   width: 150px;
 `)} 
`

class NavBar extends PureComponent {

  render() {
    const {
      onMobileNavToggle,
      isMobileNavFolded,
      onMobileNav1Toggle,
      is1MobileNavFolded,
    } = this.props

    return (
      <StaticQuery query={graphql` query { site { siteMetadata { title } } } `} render={data => (
        <Wrapper >
          <NormalNavbar>

            <LogoLink>
              <ImageWraper src={logo} alt="navbar logo" />
            </LogoLink>

            <MiddleWraper>
              <Search />
            </MiddleWraper>


            <EndWraper>
              <NavLinks />
            </EndWraper>
          </NormalNavbar>

          <MobileNavbar
            isMobileNavFolded={isMobileNavFolded}
            onMobileNavToggle={onMobileNavToggle}
            is1MobileNavFolded={is1MobileNavFolded}
            onMobileNav1Toggle={onMobileNav1Toggle}
          />

        </Wrapper>
      )} />
    )
  }
}

export default NavBar

