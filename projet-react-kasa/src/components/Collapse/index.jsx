import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



export default function Collapse({title, description}) {
    const [active, setActive] = useState(false);


    return (
        <div >
            <div className="collapse-list">
                <div 
                className="collapse" 
                onClick={() => setActive( !active)}> 
                    {title}
                    <button className={"btn-collapse"+(active ? " active" : '' )}><FontAwesomeIcon icon={active === true ? faChevronUp : faChevronDown} /></button>
                </div>
                {active === true && 
                    <div className={"collapse-contain" + (active ? " show" : '')}>
                        <p>{description}</p>
                    </div>
                }
            </div> 
        </div>
    )
}