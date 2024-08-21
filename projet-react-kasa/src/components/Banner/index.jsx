
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