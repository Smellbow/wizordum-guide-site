import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import navigationGroups from '../../data/navigation'
import './Navigation.css'

function Navigation({ onNavigate }) {
    const [openGroup, setOpenGroup] = useState(null)
    const navigationRef = useRef(null)
    const { pathname } = useLocation()

    useEffect(() => {
        function handleOutsidePointer(event) {
            const clickedInsideNavigation =
                navigationRef.current?.contains(event.target)

            if (!clickedInsideNavigation) {
                setOpenGroup(null)
            }
        }

        document.addEventListener('pointerdown', handleOutsidePointer)

        return () => {
            document.removeEventListener(
                'pointerdown',
                handleOutsidePointer,
            )
        }
    }, [])

    function handleNavigationKeyDown(event) {
        if (event.key !== 'Escape' || openGroup === null) {
            return
        }

        event.stopPropagation()

        const openButton =
            navigationRef.current?.querySelector(
                '[aria-expanded="true"]',
            )

        setOpenGroup(null)
        openButton?.focus()
    }


    function handleNavigate() {
        setOpenGroup(null)
        onNavigate()
    }

    return (
        <nav
            ref={navigationRef}
            className="primary-nav"
            aria-label="Primary navigation"
            onKeyDown={handleNavigationKeyDown}
        >
            <NavLink
                className="nav-home"
                to="/"
                end
                onClick={handleNavigate}
            >
                Home
            </NavLink>

            {navigationGroups.map((group, index) => {
                const isOpen = openGroup === group.label

                const containsCurrentPage = group.items.some((item) => {
                    return pathname === item.to
                })

                const groupId = `navigation-group-${index}`

                return (
                    <div className="nav-group" key={group.label}>
                        <button
                            className={`nav-group-toggle ${containsCurrentPage ? 'is-active' : ''
                                }`}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={groupId}
                            onClick={() => {
                                setOpenGroup(isOpen ? null : group.label)
                            }}
                        >
                            <span>{group.label}</span>
                            <span aria-hidden="true">▾</span>
                        </button>

                        <ul
                            id={groupId}
                            className="nav-dropdown"
                            hidden={!isOpen}
                        >
                            {group.items.map((item) => {
                                return (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            onClick={handleNavigate}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </nav>
    )
}

export default Navigation