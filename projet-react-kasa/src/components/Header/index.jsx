import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A-propos</Link>
            </nav>
        </header>
    )
}