import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * Le composant `Slideshow` permet d'afficher une série d'images sous forme d'un carrousel.
 * L'utilisateur peut naviguer entre les images en utilisant des boutons de navigation
 * qui apparaissent lorsque plus d'une image est disponible.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string[]} props.pictures - Un tableau d'URL des images à afficher dans le carrousel.
 *
 * @returns {JSX.Element} Un élément JSX représentant un carrousel interactif.
 */

export default function Slideshow({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

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
                <div className="compteur">  
                    <span>{currentIndex + 1} / {pictures.length}</span>
                </div>
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