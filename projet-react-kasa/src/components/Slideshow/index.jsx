import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
    ];

    //Fonctions qui modifient l'index actuel
    const handlePrev = () => {
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    }

    const handleNext = () => {
        setCurrentIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    }


    return (
        <div className="slide-show">
            <button className="prev" onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="next" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></button>
            <ul>
                {images.map((image, index) => (
                    <li key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}