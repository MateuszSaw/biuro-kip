import { FunctionComponent } from 'react'
import { StyledHeader, StyledList, StyledItem } from './OfferModal.Styled'
import CheckPoint from 'statics/Icons/CheckPoint'
import Exit from 'statics/Icons/Exit'
import Modal from 'components/Modal'
type Props = {
  handleOpen: VoidFunction
  list: string[]
  title: string
  secondaryColor: string
  rgbColorValues: string
}

const OfferModal: FunctionComponent<Props> = ({
  handleOpen,
  list,
  title,
  secondaryColor,
  rgbColorValues,
}) => (
  <Modal>
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
  </Modal>
)

export default OfferModal
