import { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser);
    };
    const [firstNameError, setFirstNameError] = useState("");
    const HandleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First name must be at least three characters long!");
        }
        else setFirstNameError(null);
    }
    const [lastNameError, setLastNameError] = useState("");
    const HandleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last name must be at least 3 characters")
        }
        else setLastNameError(null);
    }
    const [emailError, setEmailError] = useState("");
    const HandleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailError("Email must be at least two digits long")
        }
        else setEmailError(null);
    }
    const [passwordError, setPasswordError] = useState("");
    const HandlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be minimum eight digits")
        }
        else setPasswordError(null);
    }
    const [confirmError, setConfirmError] = useState ("");
    const MatchConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (password != e.target.value) {
            setConfirmError("Password do not match!")
        }
        else setConfirmError(null);
    }
    
    return (
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="firstName"> First Name:</label>
                <input type="text" name={firstName} id={firstName} onChange={HandleFirstName}/>
                {firstNameError ? <p>{firstNameError}</p> : "" }
            </div>
            <div>
                <label htmlFor="lastName"> Last Name:</label>
                <input type="text" name={lastName} id={lastName} onChange={HandleLastName}/>
                {lastNameError ? <p>{lastNameError}</p> : ""}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name={email} id={email} onChange={HandleEmail}/>
                {emailError ? <p>{emailError}</p> : ""}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name={password} id={password} onChange={HandlePassword}/>
                {passwordError ? <p>{passwordError}</p> : ""}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="text" name={confirmPassword} id={confirmPassword} onChange={MatchConfirmPassword}/>
                {confirmError ? <p>{confirmError}</p> : ""}
            </div>

            <input type="submit" value="Submit"/>
        </form>
    );
}






export default Form;