import { useEffect, useState } from 'react'

const STORAGE_KEY = 'wizordum-theme'

function getInitialTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)',
  ).matches

  return prefersLight ? 'light' : 'dark'
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === 'dark' ? 'light' : 'dark'
    })
  }

  return {
    theme,
    toggleTheme,
  }
}

export default useTheme