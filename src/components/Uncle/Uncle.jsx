import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin asset={asset} name={'Rafsan'} />
                <Cousin name={'Sohana'} />
            </section>
        </div>
    );
};

export default Uncle;