import { useParams } from "react-router-dom";


export default function FicheLogement() {
    const { id } = useParams();

    return (
        <div className="wrapper">
            <h2>Ceci est la fiche de logement n°{id}</h2>
        </div>
        
    )
}