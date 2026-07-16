import { Link, useParams } from 'react-router-dom'
import navigationGroups from '../data/navigation'
import useDocumentTitle from '../hooks/useDocumentTitle'

function ComingSoonPage() {
    const { guideSlug } = useParams() // get the guideSlug from the URL parameters in the route from react router
    const expectedPath = `/guides/${guideSlug}`

    const guide = navigationGroups
        .flatMap((group) => group.items)
        .find((item) => item.to === expectedPath)

    const title = guide?.label ?? 'Unknown guide'

    useDocumentTitle(title)

    if (!guide) {
        return (
            <section className="page-width">
                <p>Unknown guide</p>
                <h1>That guide does not exist</h1>
                <Link to="/">Return home</Link>
            </section>
        )
    }

    return (
        <section className="page-width">
            <p>Guide in progress</p>

            <h1>{guide.label}</h1>

            <p>
                This article is on the migration roadmap. Its original notes will be
                reviewed and moved into the new reusable guide layout.
            </p>

            <Link to="/guides/basic-walls">
                Read the completed sample guide
            </Link>
        </section>
    )
}

export default ComingSoonPage