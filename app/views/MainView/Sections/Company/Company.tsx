import Section from 'components/Section'
import { FunctionComponent } from 'react'
import {
  StyledPhoto,
  StyledWrapper,
  StyledContent,
  StyledHeader,
} from './Company.styled'
import Text from './components/Text'
import Header from 'components/Header'

const Company: FunctionComponent = () => (
  <Section link="company">
    <StyledWrapper>
      <StyledPhoto $imageLink="/aboutMe.jpg" />
      <StyledContent>
        <StyledHeader>
          <Header
            startText="Nasza"
            endText="misja"
            subtitle="Jesteśmy partnerem godnym zaufania"
          />
        </StyledHeader>
        <Text />
      </StyledContent>
      <StyledPhoto $imageLink="/company2.png" />
    </StyledWrapper>
  </Section>
)

export default Company
