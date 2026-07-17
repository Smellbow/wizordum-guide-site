import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './CreditsPage.css'

const communityCredits = [
    {
        name: 'Primoz & Taoma',
        role: 'Developers and offical guide creators',
        description:
            'Blesed the community with the Wizordum editor and its official guides!',
        avatar: 'avatars/ember1.webp',
    },
    {
        name: 'Wheyy',
        role: 'Custom maps and secret level mad scientist',
        description:
            'Youve played their maps, youve seen the endless creativity!',
        avatar: 'avatars/wheyy.webp',
    },
    {
        name: 'Killmonster',
        role: 'Mapjam monster',
        description:
            'The mind behind some of the most memorable and challenging community maps.',
        avatar: 'avatars/killm.webp',
    },
    {
        name: 'Adelion',
        role: 'Unnofical custom map QA department',
        description:
            'If you can get approval from Adelion, youve done something right! Theyve played and tested countless community maps.',
        avatar: 'avatars/adel.webp',
    },
    {
        name: 'Smellbow',
        role: 'Creator of this site!',
        description: 'I make the odd map and write guides as my own memory is awful 🧠',
        avatar: 'avatars/smellbow.png',
    },
]

function CreditsPage() {
    useDocumentTitle('Credits')

    return (
        <section
            className="credits-page page-width"
            aria-labelledby="credits-title"
        >
            <header className="credits-header">
                <p className="eyebrow">Community acknowledgements</p>

                <h1 id="credits-title">Credits</h1>

                <p>
                    Created by the community, for the community.
                </p>
            </header>

            <ul className="credits-grid">
                {communityCredits.map((person) => (
                    <li className="credit-card" key={person.name}>
                        {person.avatar ? (
                            <img
                                className="credit-avatar"
                                src={publicAsset(person.avatar)}
                                alt=""
                                loading="lazy"
                            />
                        ) : (
                            <span className="credit-mark" aria-hidden="true">
                                {person.name.charAt(0)}
                            </span>
                        )}

                        <div className="credit-details">
                            <h2>{person.name}</h2>
                            <p className="credit-role">{person.role}</p>
                            <p>{person.description}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <p className="credits-thanks">
                Special thanks to everyone in the Wizordum discord community!
            </p>
        </section>
    )
}

export default CreditsPage