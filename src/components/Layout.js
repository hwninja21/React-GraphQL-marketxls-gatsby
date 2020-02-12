import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'typeface-ibm-plex-sans'

import rem from '../utils/rem'
import Nav from './Nav'
import Footer from './Footer'
import './css/layout.css'


injectGlobal`
  body {
    //font-family: "ibm plex sans";
  }
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

class Layout extends PureComponent {
  state = {
    isMobileNavFolded: true,
    is1MobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  toggleMobileNav1 = () => {
    this.setState(prevState => ({
      is1MobileNavFolded: !prevState.is1MobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
      is1MobileNavFolded: true,
    })
  }

  render() {
    const { isMobileNavFolded, is1MobileNavFolded } = this.state
    return (
      <Wrapper>
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
          is1MobileNavFolded={is1MobileNavFolded}
          onMobileNav1Toggle={this.toggleMobileNav1}
        />
        {this.props.children}
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
