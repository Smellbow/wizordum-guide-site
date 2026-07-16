import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>Created by the community, for the community.</p>

                <nav aria-label="Footer navigation">
                    <Link to="/resources">Resources</Link>
                    <Link to="/contribute">Contribute</Link>
                    <Link to="/credits">Credits</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer