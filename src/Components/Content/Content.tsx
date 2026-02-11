import Cards from "../Cards/Cards.tsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.tsx";
import Goals from "../Goals/Goals.tsx";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics.tsx";
import './Content.css';
import { userCards } from "../Cards/Cards.data.ts"
import { goalsList } from "../Goals/Goals.data.ts";

const Content = () => {
    return (
    <div className="main-container">
            <div className="main__left">
                <Cards cards={userCards}/>
                <TransactionHistory/>
            </div>
            <div className="main__right">
                <Goals goals={goalsList}/>
                <OutcomeStatistics/>
          </div>
    </div>)
}

export default Content;