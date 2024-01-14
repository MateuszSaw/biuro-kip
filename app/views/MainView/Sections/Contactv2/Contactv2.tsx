import { FunctionComponent } from 'react'
import {
  MainContainer,
  StyledContent,
  StyledBox,
  Overlay,
  StyledHeader,
  StyledContactInfo,
} from './Contactv2.styled'
import Phone from 'statics/Icons/Phone'
import Mail from 'statics/Icons/Mail'

const Contact: FunctionComponent = () => (
  <MainContainer id="contact">
    <Overlay />
    <StyledContent>
      <StyledBox>
        <StyledHeader>
          Skontaktuj się <span>z nami!</span>
        </StyledHeader>
        <span>
          Odpowiemy na Twoje pytania podczas bezpłatnej konsultacji.
          <br />
          Usługi kadrowo-płacowe Agnieszka Świerczek
        </span>
        <StyledContactInfo>
          <a href="tel:+48333222555">
            <Phone />
            zadzwoń
            <br />
            333-222-555
          </a>
          <a href="mailto:twojemail@example.com">
            <Mail />
            napisz
            <br />
            twojemail@example.com
          </a>
        </StyledContactInfo>
      </StyledBox>
      {/* <StyledHeader>
        Skontaktuj się <span>z nami!</span>
      </StyledHeader>
      <StyledSubtitle>
        Odpowiemy na Twoje pytania podczas bezpłatnej konsultacji.
        <br />
        Usługi kadrowo-płacowe Agnieszka Świerczek
      </StyledSubtitle>
      <StyledContactInfo>
        <a href="tel:+48333222555">
          <Phone />
          zadzwoń
          <br />
          333-222-555
        </a>
        <a href="mailto:twojemail@example.com">
          <Mail />
          napisz
          <br />
          twojemail@example.com
        </a>
      </StyledContactInfo> */}
    </StyledContent>
  </MainContainer>
)

export default Contact
