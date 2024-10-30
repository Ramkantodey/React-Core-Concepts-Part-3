import { useState } from "react";

const StateFullForm = () => {

    const [name, setName] = useState('vai ree vai');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');



    const handleSubmit = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
            console.log(name, email, password);
        }

    };

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }


    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required id="" />
                <br />
                <input type="submit" value="Submit"></input>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;