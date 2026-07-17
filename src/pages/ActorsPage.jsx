import useDocumentTitle from '../hooks/useDocumentTitle'
import actors from '../data/actors'
import './ActorsPage.css'
import ActorBrowser from '../components/actors/ActorBrowser'

function ActorsPage() {
    useDocumentTitle('Actor Reference')

    return (
        <section
            className="actors-page page-width"
            aria-labelledby="actors-title"
        >
            <header className="actors-header">
                <p className="eyebrow">Editor reference</p>

                <h1 id="actors-title">Actor Reference</h1>

                <p>
                    Search Wizordum’s actors, learn what their parameters control,
                    and find practical examples of how they can be used.
                </p>
            </header>

            <ActorBrowser actors={actors} />
        </section>
    )
}

export default ActorsPage