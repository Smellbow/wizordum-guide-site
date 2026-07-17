import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './ResourcesPage.css'

const resources = [
    {
        name: 'Official Wizordum guides',
        description:
            'Read the official editor documentation, quick-reference material, and guides maintained by the Wizordum team.',
        url: 'https://mod.io/g/wizordum/r',
        action: 'Browse official guides',
        icon: 'resources/cog.svg',
        fallback: 'M',
    },
    {
        name: 'Wizordum on Steam',
        description:
            'Visit the Steam store page to purchase Wizordum or catch up with its latest announcements.',
        url: 'https://store.steampowered.com/app/1715590/Wizordum/',
        action: 'Visit the Steam page',
        icon: 'resources/steam.svg',
        fallback: 'S',
    },
    {
        name: 'Wizordum Discord',
        description:
            'Meet other mappers, exchange editor tips, take part in map jams, and share what you are building.',
        url: 'https://discord.gg/p5D4ddRrKN',
        action: 'Join the community',
        icon: 'resources/discord.svg',
        fallback: 'D',
    },
]

function ResourcesPage() {
    useDocumentTitle('Resources')

    return (
        <section
            className="resources-page page-width"
            aria-labelledby="resources-title"
        >
            <header className="resources-header">
                <p className="eyebrow">Useful destinations</p>

                <h1 id="resources-title">Resources</h1>

                <p>
                    Official documentation, the game itself, and places to meet
                    other members of the mapping community.
                </p>
            </header>

            <ul className="resource-grid">
                {resources.map((resource) => (
                    <li className="resource-card" key={resource.name}>
                        <div className="resource-icon">
                            {resource.icon ? (
                                <img
                                    src={publicAsset(resource.icon)}
                                    alt=""
                                    loading="lazy"
                                />
                            ) : (
                                <span aria-hidden="true">
                                    {resource.fallback}
                                </span>
                            )}
                        </div>

                        <div className="resource-content">
                            <h2>{resource.name}</h2>

                            <p>{resource.description}</p>

                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {resource.action}
                                <span aria-hidden="true"> →</span>
                                <span className="sr-only">
                                    {' '}(opens in a new tab)
                                </span>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ResourcesPage