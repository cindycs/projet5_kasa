import logementList from '../data/logement.json';
import { useParams } from "react-router-dom";
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';

export default function FicheLogement() {
    const { id } = useParams(); //Récupération de l'id de l'URL
    const logement = logementList.find(logement => logement.id === id);

    return (
        <div className="wrapper">
            <Slideshow pictures={logement.pictures}/>
            <section className='logement'>
                <div className="logement-title">
                    <h2>{logement.title}</h2>
                    <p className="localisation">{logement.location}</p>
                    <ul>
                        {logement.tags.map((tag, index) => (
                            <li className="tag" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="logement-profil">

                </div>
                <div className="logement-contain">
                    <div className="logement-carac">
                        <Collapse title="Description" description={logement.description}/>
                    </div>
                    <div className="logement-carac">
                        <Collapse title="Équipements" description={logement.equipments}/>
                    </div>
                </div>
            </section>
        </div>
    )
}