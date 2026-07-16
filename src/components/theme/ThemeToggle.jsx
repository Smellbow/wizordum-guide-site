import './ThemeToggle.css'

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Use ${nextTheme} theme`}
    >
      <span aria-hidden="true">
        {theme === 'dark' ? '☀' : '☾'}
      </span>

      <span>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}

export default ThemeToggle