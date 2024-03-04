import { FunctionComponent, useEffect, useState } from 'react'
import { StyledWrapper } from './ScrollToTop.styled'
import Top from 'statics/Icons/Top'
import scrollToTop from './utils/scrollToTop'

const ScrollToTop: FunctionComponent = () => {
  const [isVisibile, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const handleClick = () => {
    setIsVisible(false)
    scrollToTop()
  }

  return (
    <StyledWrapper onClick={handleClick} $ShouldBeVisible={isVisibile}>
      <Top />
    </StyledWrapper>
  )
}

export default ScrollToTop
