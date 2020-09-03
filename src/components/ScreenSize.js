import { useMediaQuery } from 'react-responsive'

const BigScreen = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1401 })
    return isDesktop ? children : null
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1400 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
}

export {
    Desktop, Mobile, BigScreen
}