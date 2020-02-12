import styled, { css } from 'styled-components'

import rem from '../../utils/rem'
import { resetInput } from '../../utils/form'
import { navbarHeight } from '../../utils/sizes'

const NavButton = styled.div`
  ${resetInput}
//  flex: 0 0 auto;
  min-width: 40px;
  height: ${rem(navbarHeight)};
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
 
  ${p => p.active && css`
    background: #FFFFFF;
  `}
`

export default NavButton