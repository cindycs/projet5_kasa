import logementList from '../../data/logement.json'; //BDD des différents logements
import { useNavigate } from 'react-router-dom';

/**
 *  * Le composant `Card` affiche une galerie de cartes représentant des logements.
 * Chaque carte est interactive et redirige l'utilisateur vers une page de détail du logement lorsqu'elle est cliquée.
 *
 * @returns {JSX.Element} Un élément JSX représentant une section contenant plusieurs cartes de logements.
 *
 * @returns 
 */

export default function Card() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/fiche-logement/${id}`);
    }

    return (
        <section className="gallery-card">
            {logementList.map((logement) => (
                <div className="card" key={ logement.id }>
                    <img src ={logement.cover}/>
                    <p>{logement.title}</p>
                    <button
                        className="card-btn"
                        onClick={() => handleCardClick(logement.id)}
                        >     
                    </button>
                </div>
            ))}
        </section>
    )
}