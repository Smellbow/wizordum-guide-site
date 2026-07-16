import useDocumentTitle from '../hooks/useDocumentTitle'
function ContributePage() {
    useDocumentTitle('Contribute')
    return (
        <section className="page-width">
            <h1>Contribute</h1>

            <p>
                Found a useful editor technique, an error, or a clearer way to explain
                something? Community knowledge is what makes this guide valuable.
            </p>
        </section>
    )
}

export default ContributePage