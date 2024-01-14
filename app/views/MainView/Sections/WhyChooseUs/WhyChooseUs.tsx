import { FunctionComponent } from 'react'
import { StyledHeaderContent, StyledCardsBox } from './WhyChooseUs.styled'

import ADVANTAGES from 'constants/Advantages'
import Header from 'components/Header/Header'
import Section from 'components/Section'
import theme from 'constants/theme'

const WhyChooseUs: FunctionComponent = () => (
  <Section link="whyUs" backgroundColor={theme.colors.grayBackground}>
    <StyledHeaderContent>
      <Header
        startText="Dlaczego"
        endText="my?"
        subtitle="Przenieś naliczanie wynagrodzeń oraz administrowanie kadrami na
          zewnątrz swojej firmy. Postaw na wysoką jakość opartą na doświadczeniu
          i wiedzy naszych specjalistów."
      />
    </StyledHeaderContent>
    <StyledCardsBox>
      {ADVANTAGES.map(({ title, description, Icon }) => (
        <div key={title}>
          <Icon />
          <p>{title}</p>
          <div>{description}</div>
        </div>
      ))}
    </StyledCardsBox>
  </Section>
)

export default WhyChooseUs
