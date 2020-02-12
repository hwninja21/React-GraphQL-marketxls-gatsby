import { css } from 'styled-components'

export const mobile = inner => css`
  @media (max-width: ${75}em) {
    ${inner}
  }
`

export const mobile1 = inner => css`
  @media (max-width: ${1170/16}em) {
    ${inner}
  }
`
export const mobile2 = inner => css`
  @media (max-width: ${38}em) {
    ${inner}
  }
`
export const mobile3 = inner => css`
  @media (max-width: ${18.5}em) {
    ${inner}
  }
`
