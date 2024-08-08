import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

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

export default function Apropos() {
    return (
        <div className="wrapper">
            <Banner type="a-propos" />
            {rubriqueList.map(rubrique => (
                <Collapse key={rubrique.id} title={rubrique.name} description={rubrique.description} />
            ))}
        </div>
    )
}