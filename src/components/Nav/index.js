import React from 'react'
import Navbar from './Navbar'

const Nav = props => {
  const {
    isMobileNavFolded,
    onMobileNavToggle,
    is1MobileNavFolded,
    onMobileNav1Toggle,
  } = props
  return (
    <div>
      <Navbar
        isMobileNavFolded={isMobileNavFolded}
        onMobileNavToggle={onMobileNavToggle}
        is1MobileNavFolded={is1MobileNavFolded}
        onMobileNav1Toggle={onMobileNav1Toggle}
      />
    </div>
  )
}

export default Nav