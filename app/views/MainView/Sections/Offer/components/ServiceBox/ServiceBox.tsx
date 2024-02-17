import CheckPoint from 'statics/Icons/CheckPoint'
import { FunctionComponent, useState } from 'react'
import {
  StyledBox,
  StyledItem,
  StyledIcon,
  StyledList,
  StyledHeader,
  StyledButton,
  StyledTitle,
  StyledExpandButton,
} from './ServiceBox.styled'
import Offers from '../../constatns/Offers'
import OfferMap from './utils/offerMap'
import Modal from '../Modal'
import useModal from '../Modal/hooks/useModal'
import ExpandMore from 'statics/Icons/ExpandMore'

type Props = {
  offer: Offers
  scaleUp?: boolean
}

const ServiceBox: FunctionComponent<Props> = ({ offer, scaleUp }) => {
  const { open, handleOpen } = useModal()
  const [openMobileList, setOpenMobileList] = useState(false)
  const {
    title,
    list,
    Icon,
    bgImageUrl,
    modalBgImageUrl,
    secondaryColor,
    mainColorRgbValues,
  } = OfferMap.get(offer)!

  const handleClick = () => {
    setOpenMobileList(!openMobileList)
  }
  const mobileButtonTitle = openMobileList ? 'Zamknij' : 'Otwórz'
  return (
    <>
      <StyledBox
        $bgImageUrl={bgImageUrl}
        $fill={secondaryColor}
        $scaleUp={scaleUp}
      >
        <StyledHeader $rgbColorValue={mainColorRgbValues}>
          <StyledTitle>{title}</StyledTitle>
          <StyledIcon>
            <Icon />
          </StyledIcon>
          <StyledExpandButton
            onClick={handleClick}
            $openMobileList={openMobileList}
          >
            <span>{mobileButtonTitle}</span>
            <ExpandMore />
          </StyledExpandButton>
        </StyledHeader>
        <StyledList $openMobileList={openMobileList}>
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
          rgbColorValues={mainColorRgbValues}
        />
      )}
    </>
  )
}

export default ServiceBox
