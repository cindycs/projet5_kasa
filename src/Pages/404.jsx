import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <div className='wrapper-error'>
            <h1 className='error-title'>404</h1>
            <h2 className='error-contain'>Oups! La page que vous demandez n'existe pas.</h2>
            <p><NavLink 
                    to="/" 
                    end //s'assure que la classe active est appliqué ubiquement lorsque la correspond exactement a /
                    className={({ isActive }) => isActive ? "nav-contain active" : "nav-contain"}
                > 
                    Retourner sur la page d'accueil
                </NavLink>
            </p>
        </div>
    )
}