import logementList from '../data/logement.json';
import { useParams } from "react-router-dom";
import Slideshow from '../components/Slideshow';

export default function FicheLogement() {
    const { id } = useParams();

    return (
        <div className="wrapper">
            <Slideshow />
            <h2>Ceci est la fiche de logement n°{id}</h2>
            <section className='logement'>
            {logementList.map((logement) => (
                <div key={ logement.id } className="logement-contain">     
                    {logement.title}
                </div>
            ))}
            </section>
        </div>
        
    )
}