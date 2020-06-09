import React from 'react'

const ThemeLightContext = React.createContext()

export const ThemeLightProvider = ThemeLightContext.Provider
export const ThemeLightConsumer = ThemeLightContext.Consumer

export default ThemeLightContext