import { NavLink } from 'react-router-dom'; //Extension de Link
import Logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header className='wrapper-header'>
            <div className='logo'>
                <img src={Logo} alt="Logo Kasa"/>
            </div>
            <nav>
                <NavLink 
                    to="/" 
                    end //s'assure que la classe active est appliqué ubiquement lorsque la correspond exactement a /
                    className={({ isActive }) => isActive ? "nav-contain active" : "nav-contain"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/a-propos" 
                    className={({ isActive }) => isActive ? "nav-contain active" : "nav-contain"}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}