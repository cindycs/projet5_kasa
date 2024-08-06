import logementList from '../../data/logement.json'; //BDD des différents logements
import { useNavigate } from 'react-router-dom';

export default function Card() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/fiche-logement/${id}`);
    }

    return (
        <section className="gallery-card">
            {logementList.map((logement) => (
                <button
                 key={ logement.id } 
                 className="card"
                 onClick={() => handleCardClick(logement.id)}
                 >     
                    {logement.title}
                </button>
            ))}
        </section>
    )
}