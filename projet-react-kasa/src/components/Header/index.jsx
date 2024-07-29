import Carrousel from '../Carrousel'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className='wrapper'>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A-propos</Link>
            </nav>
            <Carrousel />
        </header>
    )
}