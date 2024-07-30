import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header className='wrapper-header'>
            <div className='logo'>
                <img src={Logo} alt="Logo Kasa"/>
            </div>
            <nav>
                <Link className='active' to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}