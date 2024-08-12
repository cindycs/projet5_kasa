import logementList from '../data/logement.json';
import { useParams } from "react-router-dom";
import Slideshow from '../components/Slideshow';

export default function FicheLogement() {
    const { id } = useParams(); //Récupération de l'id de l'URL
    const logement = logementList.find(logement => logement.id === id);
    //const images = logement.pictures.map((picture) => ());

    return (
        <div className="wrapper">
            <Slideshow pictures={logement.pictures}/>
            
                {/*logement.pictures.map((picture) => (
                    <div className="slide-show">
                        <img key ={picture} src={picture} alt={`Image de ${logement.title}`}/>
                    </div>
                ))*/}
            
            <section className='logement'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
                <div className="logement-contain">
                    {logement.description}
                </div>
            </section>
        </div>
    )
}