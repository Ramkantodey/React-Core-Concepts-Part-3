const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = 'submit' }) => {




    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value={submitBtnText}></input>
            </form>
        </div>
    );
};

export default ReusableForm;