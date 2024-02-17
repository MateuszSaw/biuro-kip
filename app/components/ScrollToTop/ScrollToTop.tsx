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
    setIsVisible(window.scrollY < 300)
  }

  return (
    <StyledWrapper onClick={scrollToTop} $ShouldBeVisible={isVisibile}>
      <Top />
    </StyledWrapper>
  )
}

export default ScrollToTop
