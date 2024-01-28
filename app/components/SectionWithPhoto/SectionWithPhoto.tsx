import { FunctionComponent, ReactNode } from 'react'
import {
  StyledContent,
  StyledOverlay,
  StyledSection,
} from './SectionWithPhoto.styled'

type Props = {
  link: string
  imageLink: string
  children: ReactNode
}

const SectionWithPhoto: FunctionComponent<Props> = ({
  link,
  imageLink,
  children,
}) => (
  <StyledSection id={link} $imageLink={imageLink}>
    <StyledOverlay />
    <StyledContent>{children}</StyledContent>
  </StyledSection>
)
export default SectionWithPhoto
