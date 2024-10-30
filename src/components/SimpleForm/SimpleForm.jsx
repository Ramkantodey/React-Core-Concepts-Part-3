const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default SimpleForm;