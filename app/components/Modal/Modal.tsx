import { FunctionComponent, ReactNode } from 'react'
import { StyledModal, StyledWrapper } from './Modal.styled'

type Props = {
  children: ReactNode
}

const Modal: FunctionComponent<Props> = ({ children }) => (
  <StyledModal open>
    <StyledWrapper>{children}</StyledWrapper>
  </StyledModal>
)

export default Modal
