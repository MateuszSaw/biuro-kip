import SectionWithPhoto from 'components/SectionWithPhoto'
import {
  StyledHeader,
  StyledFooterInfo,
  StyledTextContainer,
  StyledWrapper,
  StyledSubHeader,
} from './Home.styled'
import { HOME_IMAGE_LINK } from './constants'

const Home = () => (
  <SectionWithPhoto link="home" imageLink={HOME_IMAGE_LINK}>
    <StyledWrapper>
      <StyledHeader translate="no">OUTSOURCING KADR I PŁAC</StyledHeader>
      <StyledSubHeader>
        Twoje kadry i płace w bezpiecznych rękach
      </StyledSubHeader>
      <StyledTextContainer>
        <span>Postaw na rzetelną i profesjonalną obsługę kadrowo-płacową.</span>
        <span>
          Zadbamy o poprawne naliczanie wynagrodzeń Twoich pracowników oraz
          zgodne z przepisami administrowanie dokumentacją kadrową w Twojej
          organizacji.
        </span>
        <span>
          Nasza oferta skierowana jest do przedsiębiorstw oczekujących
          stabilności, pragnących zwiększyć efektywność, zminimalizować koszty
          oraz ryzyka związane z utrzymaniem działów wewnętrznych.
        </span>
        Jesteśmy z Gdańska ale współpracujemy również online.
        <span>
          <a href="#contact">Skontaktuj się z nami</a> już teraz, byśmy mogli
          zadbać o Twój biznes tak, jakby był naszym własnym.
        </span>
      </StyledTextContainer>
      <StyledFooterInfo>
        KADRY – PŁACE – KONSULTING – ZUS – PIT – PFRON – CUDZOZIEMCY –
        KSIĘGOWOŚĆ – PRAWO PRACY
      </StyledFooterInfo>
    </StyledWrapper>
  </SectionWithPhoto>
)

export default Home
