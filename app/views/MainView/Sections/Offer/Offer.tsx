import { FunctionComponent } from 'react'
import { StyledWrapper, StyledBoxContent, StyledSubtitle } from './Offer.styled'
import ServiceBox from './components/ServiceBox'
import Offers from './constatns/Offers'
import Section from 'components/Section'
import theme from 'constants/theme'
import Header from 'components/Header'

const Offer: FunctionComponent = () => (
  <Section link="offer" backgroundColor={theme.colors.grayBackground}>
    <div>
      <StyledWrapper>
        <Header startText="Nasza" endText="oferta" subtitle="" />
        <StyledSubtitle>
          <p>
            Każdego klienta traktujemy indywidualnie, dlatego ceny naszych usług
            ustalane są w drodze indywidualnych ustaleń z klientem. Oferta cena
            uzależniona jestod liczby zatrudnionych pracowników, wykonywanych
            procesów i indywidualnych potrzeb Klienta.
          </p>
          <p>
            W ramach świadczonych usług oferujemy usługi płacowe,
            kompleksoweusługi kadrowo-płacowe oraz skorzystanie z naszych
            dodatkowych usług:
          </p>
        </StyledSubtitle>
        <StyledBoxContent>
          <ServiceBox offer={Offers.HR} />
          <ServiceBox offer={Offers.PAYROLL} scaleUp />
          <ServiceBox offer={Offers.ADDITIONAL} />
        </StyledBoxContent>
      </StyledWrapper>
    </div>
  </Section>
)

export default Offer
