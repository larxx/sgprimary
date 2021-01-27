import React, { useState, useContext, createContext } from 'react'

const NavDrawerContext = createContext()

function NavDrawerProvider(props) {
  const [isOpen, setIsOpen] = useState(false)
  return <NavDrawerContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function useNavDrawer() {
  const context = useContext(NavDrawerContext)
  if (!context) {
    throw new Error(`useNavDrawer should be used within NavDrawerProvider`)
  }
  return context
}

export { NavDrawerProvider, useNavDrawer }
