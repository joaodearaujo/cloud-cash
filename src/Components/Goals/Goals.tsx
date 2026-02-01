import { GoalsProps } from "./Goals.type";
import './Goals.css';




const Goals = ({money, date} : GoalsProps) => {
    return(
        <div className="goals-container">
            <div className="goals__header">
                <div className="goals__title">Goals</div>
                <button className="goals__add-goal">+</button>
            </div>
            <div className="goals__card-container">
                <div className="goals__card">
                    <div className="goals__values">
                        <h1 className="goals__money">{`R$${money}`}</h1>
                        <h3 className="goals__date">{`${date}`}</h3>
                    </div>
                    <div className="goals__label">
                            <img src="#" alt="Goal Image" className="goals__icon" />
                            <h2 className="goals__goal-name">Teste</h2>
                    </div>
                </div>
                <div className="goals__card">
                    <div className="goals__values">
                        <h1 className="goals__money">{`R$${money}`}</h1>
                        <h3 className="goals__date">{`${date}`}</h3>
                    </div>
                    <div className="goals__label">
                            <img src="#" alt="Goal Image" className="goals__icon" />
                            <h2 className="goals__goal-name">Teste</h2>
                    </div>
                </div>
                <div className="goals__card">
                    <div className="goals__values">
                        <h1 className="goals__money">{`R$${money}`}</h1>
                        <h3 className="goals__date">{`${date}`}</h3>
                    </div>
                    <div className="goals__label">
                            <img src="#" alt="Goal Image" className="goals__icon" />
                            <h2 className="goals__goal-name">Teste</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals;