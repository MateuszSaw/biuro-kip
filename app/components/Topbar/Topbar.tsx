import {
  StyledHeader,
  StyledLink,
  StyledButton,
  StyledNavigation,
  StyledLogo,
  StyledWrapper,
} from './Topbar.styled'
import { NAV_LIST } from './constants'
import Menu from 'statics/Icons/Menu'
import { FunctionComponent, useState } from 'react'

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
          <Menu />
        </StyledButton>
        <StyledNavigation open={open}>
          {NAV_LIST.map(({ id, name }) => (
            <StyledLink key={name} href={id}>
              {name}
            </StyledLink>
          ))}
        </StyledNavigation>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Topbar
