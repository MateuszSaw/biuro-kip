import { FunctionComponent } from 'react'
import { StyledButton, StyledFooter, StyledHeader } from './StyledFooter'
import Modal from 'components/Modal'
import useModal from 'components/Modal/hooks/useModal'
import PrivacyPolicy from './components/PrivacyPolicy'
import Exit from 'statics/Icons/Exit'

const Footer: FunctionComponent = () => {
  const { open, handleOpen } = useModal()
  return (
    <StyledFooter $open={open}>
      <StyledButton onClick={handleOpen}>
        Copyright © Polityka prywatności
      </StyledButton>
      {open && (
        <Modal>
          <StyledHeader>
            <h2>Polityka prywatności</h2>
            <button onClick={handleOpen}>
              <Exit />
            </button>
          </StyledHeader>
          <PrivacyPolicy />
        </Modal>
      )}
    </StyledFooter>
  )
}

export default Footer
