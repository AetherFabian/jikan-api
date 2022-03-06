import React from "react";
import { Link } from "react-router-dom";
import "./character.css";

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <Link
                className="Character__container"
                to={`/character/${character.name}`}
            >
            <div className="Characters">
                <div className = "Character__container">
                <div className="Character__Data">
                        <h2 className = "Character__name">{props.character.name}</h2>
                    </div>
                </div>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default Character;
