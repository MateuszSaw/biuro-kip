import { StyledHeader, StyledLogo, StyledWrapper } from './Topbar.styled'

import { FunctionComponent, useState } from 'react'
import MenuList from './components/MenuList'
import HamburgerMenu from './components/HamburgerMenu'

const Topbar: FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    document.body.classList.toggle('no-scroll')
  }

  const logoHref = open ? undefined : '#home'

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo href={logoHref} />
        <HamburgerMenu open={open} onClick={handleClick} />
        <MenuList open={open} onClick={handleClick} />
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Topbar
