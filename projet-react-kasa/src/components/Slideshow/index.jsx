import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slideshow({pictures}) {
    //Créations du useState pour gérer l'index des images
    const [currentIndex, setCurrentIndex] = useState(0);

    //Fonctions qui modifient l'index actuel
    const handlePrev = () => {
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
    }

    const handleNext = () => {
        setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
    }

    return (
        <div className="slide-show">
            {pictures.length > 1 && (
                <>
                <button className="prev" onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className="next" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button>
                </>
            )}
            
            <ul>
                {pictures.map((image, index) => (
                    <li key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image} alt={`slide n° ${index}`} className="fade"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}