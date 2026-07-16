import useDocumentTitle from '../hooks/useDocumentTitle'
import { Link } from 'react-router-dom'
import publicAsset from '../utils/publicAsset'
import './NotFoundPage.css'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)


const notFoundMessages = [
    'This corridor was never mapped.',
    'A wizard may have teleported this page elsewhere.',
    'You have wandered beyond the edge of the level.',
    'The hateforges took this page',
    'Goblins ate this page',
    'Wheyy updated this page and broke it...'
]


function NotFoundPage() {

    useDocumentTitle('Not Found')
    const pageRef = useRef(null)

    const [notFoundMessage] = useState(() => {
        const randomIndex = Math.floor(
            Math.random() * notFoundMessages.length,
        )

        return notFoundMessages[randomIndex]
    })

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches

            if (prefersReducedMotion) {
                return
            }

            const timeline = gsap.timeline()

            timeline
                .from('.not-found-code', {
                    autoAlpha: 0,
                    y: -20,
                    duration: 0.3,
                })
                .from('.not-found-creature', {
                    autoAlpha: 0,
                    scale: 0.7,
                    rotate: -8,
                    duration: 0.8,
                    ease: 'bounce',
                })
                .from(
                    [
                        '.not-found-title',
                        '.not-found-message',
                        '.not-found-link',
                    ],
                    {
                        autoAlpha: 0,
                        y: 16,
                        stagger: 0.12,
                        duration: 0.35,
                    },
                )

            return () => {
                timeline.kill()
            }
        },
        {
            scope: pageRef,
        },
    )


    return (
        <section ref={pageRef} className="page-width not-found-page">
            <p className="not-found-code">
                404 - Wizard not found
            </p>

            <img
                className="not-found-creature"
                src={publicAsset('avatars/killm.webp')}
                alt="Killmonster"
            />

            <h1 className="not-found-title">
                Page not found
            </h1>

            <p className="not-found-message">
                {notFoundMessage}
            </p>

            <Link className="not-found-link" to="/">
                Return home, wizard!
            </Link>
        </section>
    )
}

export default NotFoundPage