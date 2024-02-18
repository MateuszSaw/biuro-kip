import { FunctionComponent } from 'react'
import { StyledPhoto, StyledBackground, StyledWrapper } from './AboutMe.styled'
import { StyledContent } from '../Company/Company.styled'
import Header from 'components/Header'

const AboutMe: FunctionComponent = () => (
  <StyledBackground id="aboutMe">
    <StyledWrapper>
      <StyledPhoto />
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
          kadrowo-płacowej nabytego w małych i dużych przedsiębiorstwach oraz
          firmach outsourcingowych powstała decyzja o założeniu naszej firmy.
          Wyróżniamy się wysokim standardem świadczonych usług, polegającym na
          bezwzględnej terminowości oraz współpracy i partnerstwie jakie niesie
          za sobą prowadzenie działu kadrowo-płacowego wewnątrz firmy z
          profesjonalizmem obsługi świadczonej w formie outsourcingu
          kadrowo-płacowego.
        </p>
        <p>Potrzeby Twojej firmy i Twoich pracowników są najważniejsze.</p>
      </StyledContent>
    </StyledWrapper>
  </StyledBackground>
)

export default AboutMe
