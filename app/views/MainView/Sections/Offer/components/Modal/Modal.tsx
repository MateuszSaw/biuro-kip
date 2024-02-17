import { FunctionComponent } from 'react'
import {
  StyledHeader,
  StyledModal,
  StyledWrapper,
  StyledList,
  StyledItem,
} from './Modal.styled'
import CheckPoint from 'statics/Icons/CheckPoint'
import Exit from 'statics/Icons/Exit'

type Props = {
  handleOpen: () => void
  bgImageUrl: string
  list: string[]
  title: string
  secondaryColor: string
  rgbColorValues: string
}

const Modal: FunctionComponent<Props> = ({
  handleOpen,
  bgImageUrl,
  list,
  title,
  secondaryColor,
  rgbColorValues,
}) => (
  <StyledModal open>
    <StyledWrapper $bgImageUrl={bgImageUrl}>
      <StyledHeader $rgbColorValues={rgbColorValues}>
        <p>{title}</p>
        <button onClick={() => handleOpen()}>
          <Exit />
        </button>
      </StyledHeader>
      <StyledList>
        {list.map((item) => (
          <StyledItem key={item} $secondaryColor={secondaryColor}>
            <CheckPoint />
            {item}
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  </StyledModal>
)

export default Modal
