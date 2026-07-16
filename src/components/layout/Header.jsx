import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navigation from '../navigation/Navigation'
import ThemeToggle from '../theme/ThemeToggle'
import useTheme from '../../hooks/useTheme'
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        if (!menuOpen) {
            return undefined
        }

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setMenuOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [menuOpen])


    return (
        <header className="site-header">
            <div className="header-inner">
                <Link
                    className="brand"
                    to="/"
                    aria-label="Wizordum Mapping Guide home"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className="brand-mark" aria-hidden="true">
                        W
                    </span>
                    <span>Mapping Guide</span>
                </Link>

                <button
                    ref={menuButtonRef}
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="header-actions"
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    <span aria-hidden="true">☰</span>
                    <span>{menuOpen ? 'Close menu' : 'Menu'}</span>
                </button>

                <div
                    id="header-actions"
                    className={`header-actions ${menuOpen ? 'is-open' : ''}`}
                >
                    {/* on navigate is a function we pass to the Navigation component */}
                    <Navigation onNavigate={() => setMenuOpen(false)} />

                    <ThemeToggle
                        theme={theme}
                        onToggle={toggleTheme}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header