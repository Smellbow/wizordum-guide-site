import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import AnimatedTitle from '../components/animation/AnimatedTitle.jsx'
import './HomePage.css'

function HomePage() {
    useDocumentTitle('Home')

    return (
        <div className="home-page page-width">
            <section className="hero" aria-labelledby="hero-title">
                <p className="eyebrow">
                    Build stranger, smarter maps
                </p>

                <AnimatedTitle id="hero-title">
                    Wizordum Mapping Guide
                </AnimatedTitle>

                <p className="hero-summary">
                    A community companion for practical editor techniques,
                    real-world examples, and useful details that are easy to miss.
                </p>

                <div className="hero-actions">
                    <Link
                        className="button button-primary"
                        to="/guides/basic-walls"
                    >
                        Start with mapping basics
                    </Link>

                    <a
                        className="button button-secondary"
                        href="https://mod.io/g/wizordum/r"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Official guides
                        <span className="sr-only">
                            (opens in a new tab)
                        </span>
                    </a>
                </div>
            </section>

            <section aria-labelledby="explore-title">
                <div className="section-heading">
                    <p className="eyebrow">Choose your path</p>
                    <h2 id="explore-title">Explore the guide</h2>
                </div>

                <div className="feature-grid">
                    <article className="feature-card">
                        <span className="card-number" aria-hidden="true">
                            01
                        </span>

                        <h3>Mapping basics</h3>

                        <p>
                            Learn the editor’s building blocks and develop faster ways
                            to shape, texture, and test your maps.
                        </p>

                        <Link to="/guides/basic-walls">
                            Read Basic Walls <span aria-hidden="true">→</span>
                        </Link>
                    </article>

                    <article className="feature-card">
                        <span className="card-number" aria-hidden="true">
                            02
                        </span>

                        <h3>Advanced techniques</h3>

                        <p>
                            Combine actors, nodes, triggers, and moving terrain to create
                            memorable encounters and spaces.
                        </p>

                        <Link to="/guides/wall-setters">
                            Browse planned guides <span aria-hidden="true">→</span>
                        </Link>
                    </article>

                    <article className="feature-card">
                        <span className="card-number" aria-hidden="true">
                            03
                        </span>

                        <h3>Community knowledge</h3>

                        <p>
                            Share discoveries and help turn mapping experience into
                            lasting documentation.
                        </p>

                        <Link to="/contribute">
                            How to contribute <span aria-hidden="true">→</span>
                        </Link>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default HomePage