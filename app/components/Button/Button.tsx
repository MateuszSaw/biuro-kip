import { FunctionComponent } from 'react'
import { StyledButton } from './Button.styled'

type Props = {
  text: string
}

const Button: FunctionComponent<Props> = ({ text }) => (
  <StyledButton>{text}</StyledButton>
)

export default Button
