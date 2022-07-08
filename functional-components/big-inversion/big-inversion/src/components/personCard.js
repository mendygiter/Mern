import { useState} from "react";

const personCard = props => {
    const { firstName, lastName, age, hairColor} = props;

    return (
        <div>
            <h3>{firstName}</h3>
            <h4> {age}</h4>
            <h4>{hairColor}</h4>
        </div>


    );
}

export default personCard;