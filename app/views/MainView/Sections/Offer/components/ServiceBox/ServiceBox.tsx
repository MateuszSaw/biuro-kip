import CheckPoint from 'statics/Icons/CheckPoint'
import { FunctionComponent } from 'react'
import {
  StyledBox,
  StyledItem,
  StyledList,
  StyledHeader,
  StyledButton,
} from './ServiceBox.styled'
import Offers from '../../constatns/Offers'
import OfferMap from './utils/offerMap'
import Modal from '../Modal'
import useModal from '../Modal/hooks/useModal'

type Props = {
  offer: Offers
  scaleUp?: boolean
}

const ServiceBox: FunctionComponent<Props> = ({ offer, scaleUp }) => {
  const { open, handleOpen } = useModal()
  const {
    title,
    list,
    Icon,
    bgImageUrl,
    modalBgImageUrl,
    secondaryColor,
    mainColorRgbValues,
  } = OfferMap.get(offer)!
  return (
    <>
      <StyledBox
        $bgImageUrl={bgImageUrl}
        $fill={secondaryColor}
        $scaleUp={scaleUp}
      >
        <StyledHeader>
          <p>{title}</p>
          <Icon />
        </StyledHeader>
        <StyledList>
          {list.map((item) => (
            <StyledItem key={item}>
              <CheckPoint />
              {item}
            </StyledItem>
          ))}
        </StyledList>
        <StyledButton
          onClick={handleOpen}
          $rgbColorValues={mainColorRgbValues}
          $secondaryColor={secondaryColor}
        >
          Pokaż więcej
        </StyledButton>
      </StyledBox>
      {open && (
        <Modal
          handleOpen={handleOpen}
          bgImageUrl={modalBgImageUrl}
          title={title}
          list={list}
          secondaryColor={secondaryColor}
        />
      )}
    </>
  )
}

export default ServiceBox
