import './OnThisPage.css'

function OnThisPage({ items }) {
    return (
        <nav className="on-this-page" aria-label="On this page">
            <strong>On this page</strong>

            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>
                                {item.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default OnThisPage