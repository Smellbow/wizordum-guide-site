import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './ActorBrowser.css'
import publicAsset from '../../utils/publicAsset'

function ActorBrowser({ actors }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const detailTitleRef = useRef(null)
    const shouldFocusDetailsRef = useRef(false)

    const selectedActorId = searchParams.get('actor')

    const selectedActor = actors.find(
        (actor) => actor.id === selectedActorId,
    )

    useEffect(() => {
        if (!selectedActor || !shouldFocusDetailsRef.current) {
            return
        }

        shouldFocusDetailsRef.current = false

        const isNarrowScreen = window.matchMedia('(max-width: 50rem)').matches

        if (isNarrowScreen) {
            detailTitleRef.current?.focus()
        }
    }, [selectedActor])

    const normalisedSearch = searchTerm.trim().toLowerCase()

    const filteredActors = actors.filter((actor) => {
        const parameterText = actor.parameters
            .map((parameter) => {
                return `${parameter.name} ${parameter.description}`
            })
            .join(' ')

        const searchableText = [
            actor.name,
            actor.category,
            actor.summary,
            actor.description,
            actor.example,
            actor.tags.join(' '),
            parameterText,
        ]
            .join(' ')
            .toLowerCase()

        return searchableText.includes(normalisedSearch)
    })

    function selectActor(actorId) {
        const nextParams = new URLSearchParams(searchParams)

        shouldFocusDetailsRef.current = true
        nextParams.set('actor', actorId)
        setSearchParams(nextParams)
    }

    function clearSelectedActor() {
        const nextParams = new URLSearchParams(searchParams)

        nextParams.delete('actor')
        setSearchParams(nextParams)
    }

    return (
        <div className="actor-browser">
            <div className="actor-search">
                <label htmlFor="actor-search">
                    Search actors
                </label>

                <input
                    id="actor-search"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    placeholder="Try “door”, “ambush” or “trigger”"
                    autoComplete="off"
                />
            </div>
            <h2>WIP! Entries are not complete or accurate yet!</h2>
            <p className="actor-result-count" aria-live="polite">
                {filteredActors.length === 1
                    ? '1 actor found'
                    : `${filteredActors.length} actors found`}
            </p>

            <div className="actor-browser-layout">
                <div className="actor-results">
                    {filteredActors.length > 0 ? (
                        <ul className="actor-result-list">
                            {filteredActors.map((actor) => (
                                <li key={actor.id}>
                                    <button
                                        className="actor-result"
                                        type="button"
                                        aria-pressed={selectedActorId === actor.id}
                                        onClick={() => selectActor(actor.id)}
                                    >
                                        <span className="actor-result-category">
                                            {actor.category}
                                        </span>

                                        <strong>{actor.name}</strong>

                                        <span>{actor.summary}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="actor-empty">
                            No actors match “{searchTerm}”.
                        </p>
                    )}
                </div>

                <div className="actor-detail-area">
                    {selectedActor ? (
                        <article
                            className="actor-details"
                            aria-labelledby="selected-actor-title"
                        >
                            <header>
                                <p className="actor-detail-category">
                                    {selectedActor.category}
                                </p>

                                <h2
                                    id="selected-actor-title"
                                    ref={detailTitleRef}
                                    tabIndex="-1"
                                >
                                    {selectedActor.name}
                                </h2>

                                <p>{selectedActor.summary}</p>
                            </header>
                            {selectedActor.image && (
                                <img
                                    className="actor-detail-image"
                                    src={publicAsset(selectedActor.image)}
                                    alt={
                                        selectedActor.imageAlt ??
                                        `${selectedActor.name} shown in the Wizordum editor`
                                    }
                                    loading="lazy"
                                />
                            )}
                            <section>
                                <h3>What it does</h3>
                                <p>{selectedActor.description}</p>
                            </section>

                            <section>
                                <h3>Example use</h3>
                                <p>{selectedActor.example}</p>
                            </section>

                            {selectedActor.parameters.length > 0 && (
                                <section>
                                    <h3>Parameters</h3>

                                    <dl className="actor-parameters">
                                        {selectedActor.parameters.map((parameter) => (
                                            <div key={parameter.name}>
                                                <dt>{parameter.name}</dt>
                                                <dd>{parameter.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </section>
                            )}

                            <button
                                className="actor-detail-close"
                                type="button"
                                onClick={clearSelectedActor}
                            >
                                Close details
                            </button>
                        </article>
                    ) : (
                        <div className="actor-detail-placeholder">
                            <h2>Select an actor</h2>
                            <p>
                                Choose an actor from the results to read its full
                                description, parameters, and example uses.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ActorBrowser
