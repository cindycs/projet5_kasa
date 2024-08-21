import logoFooter from '../../assets/Logo_footer.png'

/**
 * Le composant `Footer` représente le bas de page principal de l'application.
 * Il inclut un logo et les copyright
 * 
 * @returns {JSX.Element} Un élément JSX représentant l'en-tête de l'application.
 */

export default function Footer(){
    return (
        <footer>
            <div className="logo-footer"><img src={logoFooter}/></div>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}