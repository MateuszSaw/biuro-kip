import { FunctionComponent, ReactNode } from 'react'
import { StyledSection, StyledWrapper } from './Section.styled'

type Props = {
  link: string
  backgroundColor?: string
  children: ReactNode
}

const Section: FunctionComponent<Props> = ({
  link,
  backgroundColor,
  children,
}) => (
  <StyledSection id={link} $backgroundColor={backgroundColor}>
    <StyledWrapper>{children}</StyledWrapper>
  </StyledSection>
)

export default Section
