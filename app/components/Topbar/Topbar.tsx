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
        <StyledLogo />
        <StyledButton onClick={handleClick}>
          <Menu />
        </StyledButton>
        <StyledNavigation open={open}>
          {NAV_LIST.map(({ id, name }) => (
            <StyledLink key={name}>
              <a href={id}>{name}</a>
            </StyledLink>
          ))}
        </StyledNavigation>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Topbar
