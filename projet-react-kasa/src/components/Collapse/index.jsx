import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const rubriqueList = [
	{
		name: 'Fiabilité',
		description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
		id: 1
	},
    {
		name: 'Respect',
		description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
		id: 2
	},
    {
		name: 'Service',
		description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme ',
		id: 3
	},
    {
		name: 'Sécurité',
		description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. ',
		id: 4
	}
]

export default function Collapse() {
    const [selectedRubriqueId, setSelectedRubriqueId] = useState(null);


    return (
        <div >
            {rubriqueList.map((rubrique) => (
                <div className="collapse-list" key= {rubrique.id}>
                    <button 
                    className="collapse" 
                    onClick={() => setSelectedRubriqueId(selectedRubriqueId === rubrique.id ? null : rubrique.id)}> 
                        {rubrique.name}
                        <FontAwesomeIcon icon={selectedRubriqueId === rubrique.id ? faChevronUp : faChevronDown} />
                    </button>
                    {selectedRubriqueId === rubrique.id && <p>{rubrique.description}</p>}
                </div>
            ))}
        </div>
    )
}