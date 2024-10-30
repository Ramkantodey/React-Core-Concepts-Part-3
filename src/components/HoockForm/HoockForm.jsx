import useInputState from "../../Hoock/useInputState";

const HoockForm = () => {
    // const nameState = useInputState('Rojoni')
    const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', emailState.value);

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNamechange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default HoockForm;