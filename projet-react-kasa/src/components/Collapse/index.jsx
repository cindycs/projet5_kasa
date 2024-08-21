import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
 * test fds
 * @param {*} param0 
 * @returns 
 */
export default function Collapse({title, description}) {
    const [active, setActive] = useState(false);


    return (
        <div className="collapse-list">
            <div 
            className="collapse" 
            onClick={() => setActive( !active)}> 
                {title}
                <button className={"btn-collapse" + (active ? " active" : '' )}><FontAwesomeIcon icon={faChevronUp} /></button>
            </div>
            {active && 
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
            }
            
        </div>
    )
}