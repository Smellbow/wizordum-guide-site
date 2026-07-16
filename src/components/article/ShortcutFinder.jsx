import { useState } from 'react'
import editorShortcuts from '../../data/editorShortcuts'
import Key from './Key'
import './ShortcutFinder.css'

function ShortcutFinder() {
    const [searchTerm, setSearchTerm] = useState('')

    const normalisedSearch = searchTerm.trim().toLowerCase()

    const filteredShortcuts = editorShortcuts.filter((shortcut) => {
        const searchableText = [
            shortcut.category,
            shortcut.keyGroups.flat().join(' '),
            shortcut.action,
            shortcut.context,
            ...(shortcut.searchTerms ?? []),
        ]
            .join(' ')
            .toLowerCase()

        return searchableText.includes(normalisedSearch)
    })

    return (
        <div className="shortcut-finder">
            <div className="shortcut-search">
                <label htmlFor="shortcut-search">
                    Search editor shortcuts
                </label>

                <input
                    id="shortcut-search"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Try “rotate”, “texture” or “3D”"
                    autoComplete="off"
                />
            </div>

            <p className="shortcut-result-count" aria-live="polite">
                {filteredShortcuts.length === 1
                    ? '1 shortcut found'
                    : `${filteredShortcuts.length} shortcuts found`}
            </p>

            {filteredShortcuts.length > 0 ? (
                <ul className="shortcut-list">
                    {filteredShortcuts.map((shortcut) => (
                        <li className="shortcut-item" key={shortcut.id}>
                            <div className="shortcut-keys">
                                {shortcut.keyGroups.map((keyGroup, groupIndex) => (
                                    <span
                                        className="shortcut-key-group"
                                        key={keyGroup.join('-')}
                                    >
                                        {groupIndex > 0 && (
                                            <span
                                                className="shortcut-key-separator"
                                                aria-hidden="true"
                                            >
                                                /
                                            </span>
                                        )}

                                        {keyGroup.map((keyName, keyIndex) => (
                                            <span
                                                className="shortcut-key-combination"
                                                key={keyName}
                                            >
                                                {keyIndex > 0 && (
                                                    <span aria-hidden="true">+</span>
                                                )}

                                                <Key>{keyName}</Key>
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </div>

                            <div className="shortcut-description">
                                <p>{shortcut.action}</p>

                                <span>{shortcut.category} · {shortcut.context}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="shortcut-empty">
                    No shortcuts match “{searchTerm}”.
                </p>
            )}
        </div>
    )
}

export default ShortcutFinder