import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
const [money, setMoney] = useContext(MoneyContext);
const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'Mamshad'} />
                <Cousin name={'Rubaiya'} />
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;