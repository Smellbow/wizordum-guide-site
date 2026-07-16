import Footer from './Footer'
import Header from './Header'
import { useRef, useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './AppLayout.css'

gsap.registerPlugin(useGSAP)

function AppLayout() {
    const mainRef = useRef(null)
    const { pathname, hash } = useLocation()
    const previousPathRef = useRef(pathname)

    useEffect(() => {
        const pathChanged = previousPathRef.current !== pathname

        if (!pathChanged) {
            return
        }

        previousPathRef.current = pathname

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        })

        mainRef.current?.focus({
            preventScroll: true,
        })
    }, [pathname])

    useEffect(() => {
        if (!hash) {
            return
        }

        const sectionId = hash.slice(1)
        const section = document.getElementById(sectionId)

        section?.scrollIntoView({
            behavior: 'auto',
            block: 'start',
        })
    }, [hash])

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches

            if (prefersReducedMotion) {
                gsap.set(mainRef.current, {
                    clearProps: 'all',
                })

                return
            }

            gsap.fromTo(
                mainRef.current,
                {
                    autoAlpha: 0.75,
                    y: 20,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    clearProps: 'all',
                },
            )
        },
        {
            dependencies: [pathname],
            scope: mainRef,
            revertOnUpdate: true,
        },
    )
    return (
        <div className="site-shell">
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>

            <Header />

            <main ref={mainRef} id="main-content" className="site-main" tabIndex="-1">
                <Outlet />
                {/* The Outlet component is a placeholder for the content of the current route. It will render the component associated with the current route, which is determined by the React Router configuration. */}
            </main>

            <Footer />
        </div>
    )
}

export default AppLayout