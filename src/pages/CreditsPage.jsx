import useDocumentTitle from '../hooks/useDocumentTitle'
function CreditsPage() {
    useDocumentTitle('Credits')
    return (
        <section className="page-width">
            <h1>Credits</h1>

            <p>Created by the community, for the community.</p>

            <p>
                Special thanks to the Wizordum developers and the mappers who explored
                the editor, documented discoveries, and paved the way.
            </p>
        </section>
    )
}

export default CreditsPage