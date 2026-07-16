import useDocumentTitle from '../hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    useDocumentTitle('Not Found')

    return (
        <section className="page-width">
            <p>404 — Lost in the dungeon</p>

            <h1>Page not found</h1>

            <p>The page may have moved, or this corridor was never mapped.</p>

            <Link to="/">Return home wizard!</Link>
        </section>
    )
}

export default NotFoundPage