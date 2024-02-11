import { FunctionComponent } from 'react'
import { StyledHamburgerLines } from './HamburgerMenu.styled'

type Props = {
  isOpen: boolean
}

const HamburgerMenu: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <StyledHamburgerLines $isOpen={isOpen}>
      <span />
      <span />
      <span />
    </StyledHamburgerLines>
  )
}

export default HamburgerMenu
