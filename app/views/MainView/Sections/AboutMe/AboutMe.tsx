import { FunctionComponent } from 'react'
import {
  StyledPhoto,
  StyledBackground,
  StyledWrapper,
  StyledDescription,
  StyledText,
  StyledTag,
  StyledHeader,
  StyledList,
  StyledItem,
} from './AbaoutMe.styled'
import Star from 'statics/Icons/Star'
import { SPECIALIZATIONS } from './constants'

const AboutMe: FunctionComponent = () => (
  <StyledBackground id="aboutMe">
    <StyledWrapper>
      <StyledPhoto />
      <StyledDescription>
        <StyledTag>O mnie</StyledTag>
        <StyledHeader>
          Razem możemy tworzyć efektywne rozwiązania, które pomogą Twojej firmie
          osiągnąć sukces.
        </StyledHeader>
        <StyledText>
          Jestem specjalistką ds. kadr i płac z wieloletnim doświadczeniem.
          Ukończyłam studia w dziedzinie rachunkowości i pracowałam jako
          księgowa oraz specjalistka ds. kadr i płac. Moja pasja do twardego HR,
          czyli obszaru kadr i płac, rozkwitła już podczas studiów, które
          ukończyłam w zakresie rachunkowości. Po latach pracy jako księgowa i
          specjalistka ds. kadr i płac, podjęłam wyzwanie stania się
          kierownikiem działu kadrowo-płacowego w biurze rachunkowym, gdzie
          zdobywałam cenne doświadczenie przez ponad 8 lat. Nieustannie
          aktualizuję swoje umiejętności uczestnicząc w kursach i
          specjalistycznych szkoleniach, aby być na bieżąco. Dzięki mojemu
          wykształceniu i praktycznemu doświadczeniu w dziale księgowym, jestem
          w stanie spojrzeć na rozliczenia wynagrodzeń szeroko i strategicznie.
          Dla mnie poufność, dokładność i terminowość to kluczowe wartości w
          mojej pracy. Współpracując ze mną, masz pewność, że Twoje potrzeby
          kadrowo-płacowe są obsługiwane z najwyższą starannością,
          zaangażowaniem i profesjonalizmem.
        </StyledText>
        <div>
          <p>Specjalizuje się w: </p>
          <StyledList>
            {SPECIALIZATIONS.map((item) => (
              <StyledItem>
                <Star />
                {item}
              </StyledItem>
            ))}
          </StyledList>
        </div>
      </StyledDescription>
    </StyledWrapper>
  </StyledBackground>
)

export default AboutMe
