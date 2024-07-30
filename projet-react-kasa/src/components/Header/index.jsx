import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header className='wrapper-header'>
            <div className='logo'>
                <img src={Logo} alt="Logo Kasa"/>
            </div>
            <nav>
                <Link className='active nav-contain' to="/">Accueil</Link>
                <Link className='nav-contain' to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}