import {
  StyledHeader,
  StyledLink,
  StyledButton,
  StyledNavigation,
  StyledLogo,
  StyledWrapper,
} from './Topbar.styled'
import { NAV_LIST } from './constants'
import { FunctionComponent, useState } from 'react'
import HamburgerMenu from './components/HamburgerMenu'

const Topbar: FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo href="#home" />
        <StyledButton onClick={handleClick}>
          <HamburgerMenu isOpen={open} />
        </StyledButton>
        <StyledNavigation open={open}>
          <StyledLink href="#home" onClick={handleClick} $disabledOnDesktop>
            Strona główna
          </StyledLink>
          {NAV_LIST.map(({ id, name }) => (
            <StyledLink key={name} href={id} onClick={handleClick}>
              {name}
            </StyledLink>
          ))}
        </StyledNavigation>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Topbar
