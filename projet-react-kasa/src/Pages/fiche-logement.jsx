import logementList from '../data/logement.json';
import { useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function FicheLogement() {
    const { id } = useParams(); //Récupération de l'id de l'URL
    const logement = logementList.find(logement => logement.id === id);
    const totalStars = 5;

    return (
        <div className="wrapper">
            <Slideshow pictures={logement.pictures}/>
            <section className='logement'>
                <div className="logement-title">
                    <h2>{logement.title}</h2>
                    <p className="localisation">{logement.location}</p>
                    <ul className='list-tag'>
                        {logement.tags.map((tag, index) => (
                            <li className="tag" key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="logement-autor">
                    <div className="logement-host">
                        <div className='host-name'>
                            <p>{logement.host.name}</p>
                        </div>
                        <div className='host-picture'>
                            <img src={logement.host.picture} alt={`photo de profil de ${logement.host.name}`}/>
                        </div>
                    </div>
                    <div className="logement-rating">
                        <ul className='list-stars'>
                        {Array.from({ length: totalStars }, (_, index) => (
                            <li
                                key={index}
                                className={`stars ${index < logement.rating ? 'filled' : ''}`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>
            <div className="logement-contain">
                <div className="logement-carac">
                    <Collapse title="Description" description={logement.description}/>
                </div>
                <div className="logement-carac">
                    <Collapse title="Équipements" description={logement.equipments}/>
                </div>
            </div>
        </div>
    )
}