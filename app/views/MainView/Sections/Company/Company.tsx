import Section from 'components/Section'
import { FunctionComponent } from 'react'
import { StyledPhoto, StyledWrapper, StyledContent } from './Company.styled'
import Header from 'components/Header'
import Text from './components/Text'

const Company: FunctionComponent = () => (
  <Section link="company">
    <StyledWrapper>
      <StyledPhoto $imageLink="/aboutMe.jpg" />
      <StyledContent>
        <Header
          startText="Nasza"
          endText="misja"
          subtitle="Jesteśmy partnerem godnym zaufania"
        />
        <Text />
      </StyledContent>
      <StyledPhoto $imageLink="/company2.png" />
    </StyledWrapper>
  </Section>
)

export default Company
