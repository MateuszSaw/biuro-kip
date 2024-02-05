import Section from 'components/Section'
import { FunctionComponent } from 'react'
import { StyledPhoto, StyledWrapper, StyledContent } from './Company.styled'
import Header from 'components/Header'

const Company: FunctionComponent = () => (
  <Section link="company">
    <StyledWrapper>
      <StyledPhoto $imageLink="public/aboutMe.jpg" />
      <StyledContent>
        <Header
          startText="Nasza"
          endText="misja"
          subtitle="Jesteśmy partnerem godnym zaufania"
        />
        <p>
          Nasze biuro specjalizuje się w{' '}
          <span>
            outsourcingu kadrowo-płacowym czyli kompleksowej obsłudze
            administracji kadrowej, zarządzania wynagrodzeniamioraz doradztwie
          </span>{' '}
          z szeroko pojętego obszarukadr, płac, zatrudniania cudzoziemców czy
          ubezpieczeń społecznych.
        </p>
        <p>
          Mieścimy się w <span>Gdańsku</span> ale współpracujemy z firmami z{' '}
          <span>całej Polski.</span>
        </p>
        <p>
          Na bazie wieloletniego i cennego doświadczenia w obsłudze
          kadrowo-płacowejnabytego w małych i dużych przedsiębiorstwach oraz
          firmach outsourcingowych powstała decyzja o założeniu
          naszejfirmy.Wyróżniamy się wysokim standardem świadczonych usług,
          polegającym na bezwzględnej terminowości oraz współpracy i
          partnerstwie jakie niesie za sobą prowadzenie działu kadrowo-płacowego
          wewnątrz firmy z profesjonalizmem obsługi świadczonej w formie
          outsourcingu kadrowo-płacowego.
        </p>
        <p>Potrzeby Twojej firmy i Twoich pracowników są najważniejsze.</p>
      </StyledContent>
      <StyledPhoto $imageLink="public/company2.png" />
    </StyledWrapper>
  </Section>
)

export default Company
