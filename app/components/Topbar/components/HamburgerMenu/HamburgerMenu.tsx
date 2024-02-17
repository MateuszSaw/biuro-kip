import { FunctionComponent } from 'react'
import { StyledButton, StyledHamburgerLines } from './HamburgerMenu.styled'

type Props = {
  open: boolean
  onClick: VoidFunction
}

const HamburgerMenu: FunctionComponent<Props> = ({ open, onClick }) => (
  <StyledButton onClick={onClick}>
    <StyledHamburgerLines $open={open}>
      <span />
      <span />
      <span />
    </StyledHamburgerLines>
  </StyledButton>
)

export default HamburgerMenu
