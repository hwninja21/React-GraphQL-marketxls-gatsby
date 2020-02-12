import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavSearch from '../NavSearch'

import { mobile, mobile2 } from '../../utils/media'
import NavLinks from './NavLinks'
import NavButton from './NavButton'
import { COLORS } from '../css/styles'

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const MainWrapper = styled.div`
  display: none;  
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `)}
`

const Wrapper = styled.div`
  display: none;
  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `)}
`

const WrapperS = styled.div`
  display: none;
  ${mobile2(css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `)}
`


const SecondaryMenu = styled.div`
  position: absolute;
  top: 4.125rem;
  left: 0;
  right: 0;
  ${p => p.open ? css`
    height: auto;
  ` : css`
    height: 0;
  `}
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 12;
  background: ${COLORS.white};
`

const IconWrapper = styled.div`
  margin-top: 24px;
  ${p => p.rotate && css`
  transform-origin: 50% 55%;
  transform: rotate(180deg);
`}

`
const Wraperfontawe = styled(FontAwesomeIcon)`
  color: #3B3E4C;
  font-size: 1.4em;
   :hover {
     opacity: 0.5;
   }
`;

const MobileNavbar = props => {
  const {
    isMobileNavFolded,
    onMobileNavToggle,
    is1MobileNavFolded,
    onMobileNav1Toggle,
  } = props

  return (
    <StaticQuery query={graphql` query { site { siteMetadata { title } } } `} render={data => (
      <MainWrapper>

        <WrapperS>
          <NavButton
            onClick={onMobileNavToggle}
            active={!isMobileNavFolded}
          >
            <IconWrapper>
              <Wraperfontawe icon={faSearch} />
            </IconWrapper>
          </NavButton>
        </WrapperS>

        <Wrapper>
          <NavButton
            onClick={onMobileNav1Toggle}
            active={!is1MobileNavFolded}

          >
            <IconWrapper rotate={!is1MobileNavFolded}>
              <Wraperfontawe icon={faChevronDown} />
            </IconWrapper>
          </NavButton>
        </Wrapper>

      

        <SecondaryMenu open={!is1MobileNavFolded}>
          <NavLinks />
        </SecondaryMenu>

        <SecondaryMenu open={!isMobileNavFolded}>
          <NavSearch/>
        </SecondaryMenu>

      </MainWrapper>
    )} />
  )
}

export default MobileNavbar
