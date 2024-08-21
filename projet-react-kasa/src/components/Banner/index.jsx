
/**
 * 
 * Le composant `Banner` affiche une bannière avec un style et un texte différents en fonction du type de page.
 * Il est utilisé pour afficher des en-têtes visuels distincts sur la page d'accueil et la page "À propos".
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.type - Détermine le type de bannière à afficher. 
 *
 * @returns {JSX.Element} Un élément JSX représentant une bannière stylisée.
 */

export default function Banner({ type }) {
    let bannerClass = 'banner';
    if (type === 'accueil') {
        bannerClass += ' banner-accueil';
    } else if (type === 'a-propos') {
        bannerClass += ' banner-a-propos';
    }

    return (
        <div className={bannerClass}>
            <div className="filtre-banner">
                <p className="text-overlay">
                    {type === 'accueil' ? 'Chez vous, partout et ailleurs' : ''}
                </p>
            </div>
        </div>
    )
}