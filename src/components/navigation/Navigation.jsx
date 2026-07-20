import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import navigationGroups from '../../data/navigation'
import './Navigation.css'

// Header passes onNavigate so selecting any link can also close the mobile menu.
function Navigation({ onNavigate }) {
    // Only one dropdown can be open. null means that they are all closed.
    const [openGroup, setOpenGroup] = useState(null)
    // React assigns the rendered <nav> DOM element to current after mounting. Current being the ref object, remember ref is to remember a value without a re-render, access the store value with 'current'
    const navigationRef = useRef(null)
    // The current URL path is used to highlight the group containing this page. uselocation object has the path, its part of react router, its aware of current url details
    const { pathname } = useLocation()

    useEffect(() => {
        // Close an open dropdown when the pointer is pressed outside the nav.
        function handleOutsidePointer(event) {
            const clickedInsideNavigation =
                navigationRef.current?.contains(event.target)

            if (!clickedInsideNavigation) {
                setOpenGroup(null)
            }
        }

        document.addEventListener('pointerdown', handleOutsidePointer)

        // Remove the document-level listener when Navigation unmounts.
        return () => {
            document.removeEventListener(
                'pointerdown',
                handleOutsidePointer,
            )
        }
    }, []) // The empty dependency array runs this setup once after mounting.

    // Escape closes the current dropdown and returns focus to its toggle.
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

    // Close both this dropdown and the parent mobile menu after navigation.
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
                // The label is also the value stored in openGroup.
                const isOpen = openGroup === group.label

                // Keep the parent toggle highlighted while one of its pages is active.
                const containsCurrentPage = group.items.some((item) => {
                    return pathname === item.to
                })

                // Connect the toggle to its dropdown for assistive technology.
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
