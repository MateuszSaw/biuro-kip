import SectionWithPhoto from 'components/SectionWithPhoto'
import { FunctionComponent } from 'react'
import { CONTACT_IMAGE_LINK } from './constants'
import { StyledBox, StyledContactItem, StyledContent } from './Contact.styled'
import Header from 'components/Header'
import Phone from 'statics/Icons/Phone'
import Mail from 'statics/Icons/Mail'

const Contact: FunctionComponent = () => (
  <SectionWithPhoto link="contact" imageLink={CONTACT_IMAGE_LINK}>
    <StyledContent>
      <StyledBox>
        <Header
          startText="Skontaktuj się"
          endText="z nami"
          subtitle="Odpowiemy na Twoje pytania podczas bezpłatnej konsultacji."
        />
        <StyledContactItem href="tel:+48888797051" target="blank">
          <Phone />
          <span>+48 888 797 051</span>
        </StyledContactItem>
        <StyledContactItem
          href="mailto:agnieszka.swierczek@biuro-kip.pl"
          target="blank"
        >
          <Mail />
          <span>agnieszka.swierczek@biuro-kip.pl</span>
        </StyledContactItem>
      </StyledBox>
    </StyledContent>
  </SectionWithPhoto>
)

export default Contact
