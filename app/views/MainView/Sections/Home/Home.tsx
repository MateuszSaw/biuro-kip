import SectionWithPhoto from 'components/SectionWithPhoto'
import {
  StyledHeader,
  StyledFooterInfo,
  StyledSubtitle,
  StyledWrapper,
} from './Home.styled'
import { HOME_IMAGE_LINK } from './constants'

// const Home = () => {
//   return (
//     <SectionWithPhoto link="home" imageLink={HOME_IMAGE_LINK}>
//       <StyledWrapper>
//         <StyledContent>
//           <span>OUTSOURCING KADR I PŁAC</span>
//           <span>
//             <p>Twoje kadry i płace w bezpiecznych rękach</p>
//             Postaw na rzetelną i profesjonalną obsługę kadrowo-płacową. Zadbamy
//             o poprawne naliczanie wynagrodzeń Twoich pracowników oraz zgodne z
//             przepisami administrowanie dokumentacją kadrową w Twojej
//             organizacji.
//           </span>
//           <span>
//             Nasza oferta skierowana jest do przedsiębiorstw oczekujących
//             stabilności, pragnących zwiększyć efektywność, zminimalizować koszty
//             oraz ryzyka związane z utrzymaniem działów wewnętrznych. Jesteśmy z
//             Gdańska ale współpracujemy również online. Skontaktuj się z nami już
//             teraz, byśmy mogli zadbać o Twój biznes tak, jakby był naszym
//             własnym.
//           </span>
//         </StyledContent>
//         <StyledFooterInfo>
//           KADRY – PŁACE – KONSULTING – ZUS – PIT – PFRON – CUDZOZIEMCY –
//           KSIĘGOWOŚĆ – PRAWO PRACY
//         </StyledFooterInfo>
//       </StyledWrapper>
//     </SectionWithPhoto>
//   )
// }
const Home = () => {
  return (
    <SectionWithPhoto link="home" imageLink={HOME_IMAGE_LINK}>
      <StyledWrapper>
        <StyledHeader>OUTSOURCING KADR I PŁAC</StyledHeader>
        <StyledSubtitle>
          <p>Twoje kadry i płace w bezpiecznych rękach</p>
          Postaw na rzetelną i profesjonalną obsługę kadrowo-płacową. Zadbamy o
          poprawne naliczanie wynagrodzeń Twoich pracowników oraz zgodne z
          przepisami administrowanie dokumentacją kadrową w Twojej organizacji.
        </StyledSubtitle>
        <StyledSubtitle>
          Nasza oferta skierowana jest do przedsiębiorstw oczekujących
          stabilności, pragnących zwiększyć efektywność, zminimalizować koszty
          oraz ryzyka związane z utrzymaniem działów wewnętrznych. Jesteśmy z
          Gdańska ale współpracujemy również online. Skontaktuj się z nami już
          teraz, byśmy mogli zadbać o Twój biznes tak, jakby był naszym własnym.
        </StyledSubtitle>
        <StyledFooterInfo>
          KADRY – PŁACE – KONSULTING – ZUS – PIT – PFRON – CUDZOZIEMCY –
          KSIĘGOWOŚĆ – PRAWO PRACY
        </StyledFooterInfo>
      </StyledWrapper>
    </SectionWithPhoto>
  )
}

export default Home
