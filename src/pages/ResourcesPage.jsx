import useDocumentTitle from '../hooks/useDocumentTitle'

function ResourcesPage() {
    useDocumentTitle('Resources')

    return (
        <section className="page-width">
            <h1>Resources</h1>

            <p>
                Official documentation, community references, and useful links for
                Wizordum mappers.
            </p>

        </section>
    )
}

export default ResourcesPage