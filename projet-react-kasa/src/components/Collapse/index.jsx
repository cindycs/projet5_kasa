import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
* Le composant `Collapse` est un accordéon interactif qui permet d'afficher ou de masquer du contenu
 * lorsque l'utilisateur clique sur le titre. Il peut être utilisé pour organiser des informations 
 * de manière compacte, comme des FAQ, des descriptions détaillées, ou des listes d'éléments.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.title - Le titre de l'accordéon, qui est toujours visible et sur lequel l'utilisateur peut cliquer pour ouvrir/fermer le contenu.
 * @param {string | string[]} props.description - Le contenu à afficher lorsque l'accordéon est ouvert. 
 * Il peut s'agir d'une simple chaîne de caractères (texte) ou d'un tableau de chaînes (liste d'éléments).
 * 
 * @returns {JSX.Element} Un composant React représentant un bloc collapsible.
 */

export default function Collapse({title, description}) {
    const [active, setActive] = useState(false);


    return (
        <div className="collapse-list">
            <div 
            className="collapse" 
            onClick={() => {
                setActive( !active)
                }
                }> 
                {title}
                <button className={"btn-collapse" + (active ? " active" : '' )}><FontAwesomeIcon icon={faChevronUp} /></button>
            </div>           
            <div className={"collapse-contain" + (active ? " show" : '')}>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>        
        </div>
    )
}