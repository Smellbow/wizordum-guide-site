import useDocumentTitle from '../hooks/useDocumentTitle'
import './ContributePage.css'

function ContributePage() {
    useDocumentTitle('Contribute')

    return (
        <section
            className="contribute-page page-width"
            aria-labelledby="contribute-title"
        >
            <header className="contribute-header">
                <p className="eyebrow">Community knowledge</p>

                <h1 id="contribute-title">Contribute</h1>

                <p>
                    Found a useful editor technique, an error, or a clearer
                    way to explain something? Community knowledge is what
                    makes this guide valuable.
                </p>
            </header>

            <div className="contribution-card">
                <h2>Send a correction or suggestion</h2>

                <p>
                    Use the contribution form to report incorrect or missing
                    information, suggest a new guide, or share something you
                    have verified in the Wizordum editor.
                </p>

                <p>
                    You will need to sign in to a free GitHub account. Your
                    contribution will be submitted as a public issue, allowing
                    it to be checked and discussed before the guide is updated.
                </p>

                <p>
                    If you dont have or dont want to make an account please reach out via Discord
                </p>

                <a
                    className="button button-primary"
                    href="https://github.com/Smellbow/wizordum-guide-site/issues/new?template=guide-contribution.yml"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open the contribution form
                    <span className="sr-only">
                        {' '}(opens in a new tab)
                    </span>
                </a>
            </div>
        </section>
    )
}

export default ContributePage