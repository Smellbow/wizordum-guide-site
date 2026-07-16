import { Link, useLocation } from 'react-router-dom'
import './OnThisPage.css'

function OnThisPage({ items }) {
    const { pathname } = useLocation()

    return (
        <nav className="on-this-page" aria-label="On this page">
            <strong>On this page</strong>

            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={`${pathname}#${item.id}`}>
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default OnThisPage