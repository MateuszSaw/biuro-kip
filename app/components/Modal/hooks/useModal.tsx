import { useState } from 'react'

const useModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
    document.body.style.overflowY = !open ? 'hidden' : 'auto'
  }

  return {
    open,
    handleOpen,
  }
}

export default useModal
