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