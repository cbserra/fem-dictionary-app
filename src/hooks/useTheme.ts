import { useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

interface FontFaceMeta {
    class: string, 
    name: string 
}

const sansSerif = { class: 'font-sans', name: 'Sans Serif' }
const serif = { class: 'font-serif', name: 'Serif' }
const mono = { class: 'font-mono', name: 'Monospace' }

export const fontFaceOptions: FontFaceMeta[] = [
  sansSerif,
  serif,
  mono
]

const useTheme = () => {
  const isSystemInDarkMode = matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkMode = () => isSystemInDarkMode.matches

  const [lsDarkModeEnabled, setLsDarkModeEnabled] = useLocalStorage<boolean>(
    'dark-mode',
    prefersDarkMode()
  )
  const [darkMode, toggleDarkMode] = useState<boolean>(lsDarkModeEnabled)
  console.log(`🚀 ~ useTheme ~ darkMode:`, darkMode)

  const [lsFontFace, setLsFontFace] = useLocalStorage<FontFaceMeta>(
    'font-face',
    sansSerif
  )
  const [currentFontFace, setCurrentFontFace] = useState<FontFaceMeta>(lsFontFace)
  console.log(`🚀 ~ useTheme ~ currentFontFace:`, currentFontFace)

  useEffect(() => {
    setLsDarkModeEnabled(darkMode)

    if (window === undefined) return
    const htmlTag = window.document.documentElement

    if (darkMode) {
      htmlTag.classList.add('dark')
    } else {
      htmlTag.classList.remove('dark')
    }
  }, [darkMode, setLsDarkModeEnabled])

  useEffect(() => {
    setLsFontFace(currentFontFace)

    if (window === undefined) return
    const bodyTag = window.document.body

    fontFaceOptions.filter((font) => font.name !== currentFontFace.name).forEach((font) => {
      bodyTag.classList.remove(font.class)
    })

    const fontFaceClass = currentFontFace.class
    // fontFaceOptions.find((font: FontFaceMeta) => font.name === currentFontFace.name)?.class || ''

    bodyTag.classList.add(fontFaceClass)
  }, [currentFontFace, setCurrentFontFace, setLsFontFace])


  return { 
    darkMode: darkMode, toggleDarkMode: toggleDarkMode, 
    currentFontFace: currentFontFace, setCurrentFontFace: setCurrentFontFace 
  }
}

export default useTheme