import { useState} from "react";

const PersonCard = props => {
    const { firstName, age, hairColor} = props;
    const [plusAge, setAge] = useState(age);


    return (
        <div>
            <h3>{firstName}</h3>
            <h4> {plusAge}</h4>
            <h4>{hairColor}</h4>
            <button onClick={ () => {setAge(plusAge+1)}}>Birthday button</button>
        </div>


    );
}

export default PersonCard;