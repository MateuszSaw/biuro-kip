import { FunctionComponent } from 'react'
import { StyledLink, StyledNavigation } from './MenuList.styled'
import { NAV_LIST } from 'components/Topbar/constants'

type Props = {
  open: boolean
  onClick: VoidFunction
}

const MenuList: FunctionComponent<Props> = ({ open, onClick }) => {
  if (open) {
    return (
      <StyledNavigation open={open}>
        {NAV_LIST.map(({ id, name }) => (
          <StyledLink key={name} href={id} onClick={onClick}>
            {name}
          </StyledLink>
        ))}
      </StyledNavigation>
    )
  }

  return (
    <StyledNavigation>
      {NAV_LIST.map(({ id, name }) => (
        <StyledLink key={name} href={id}>
          {name}
        </StyledLink>
      ))}
    </StyledNavigation>
  )
}

export default MenuList
