import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './StocksDetils/header'


const SLayout = (props, { children, location}) => (
  <>
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={({ site }) => (
    <>
      <Header location={location} siteTitle={site.siteMetadata.title} data={props.data}/>
      {children}
    </>
  )}
/>
</>
)



export default SLayout