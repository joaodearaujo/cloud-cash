import Cards from "../Cards/Cards";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Goals from "../Goals/Goals";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics";
import NewTransacition from "../NewTransaction/NewTransaction";
import { MainProps } from "./Main.type";

import './Main.css';

const Main = () => {
    return (
    <div className="main-container">
            <Cards>
                <h1>1</h1>
            </Cards>
            <TransactionHistory>
                <h1>2</h1>
            </TransactionHistory>
            <Goals>
                <h1>3</h1>
            </Goals>
            <OutcomeStatistics>
                <h1>4</h1>
            </OutcomeStatistics>
            <NewTransacition>
                <h1>5</h1>
            </NewTransacition>
    </div>)
}

export default Main;