import { FunctionComponent } from 'react'
import { StyledHeader, StyledSubtitle } from './Header.styled'

type Props = {
  startText: string
  endText: string
  subtitle?: string
}

const Header: FunctionComponent<Props> = ({ startText, endText, subtitle }) => (
  <>
    <StyledHeader>
      {startText}
      &nbsp;
      <span>{endText}</span>
    </StyledHeader>
    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
  </>
)

export default Header
