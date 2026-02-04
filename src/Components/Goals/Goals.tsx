import { GoalsProps } from "./Goals.type";
import './Goals.css';

const GoalsCard = ({cost, date, img, name} : GoalsProps) => {
    return (
        <div className="goals__card">
            <div className="goals__values">
                <h1 className="goals__cost">{`$${cost}`}</h1>
                <h3 className="goals__date">{`${date}`}</h3>
            </div>
            <div className="goals__label">
                <img src={`${img}`} alt="Goal Image" className="goals__icon" />
                <h2 className="goals__name">{name}</h2>
            </div>
        </div>
    )   
}

const Goals = () => {
    const goals = [
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 1,
        cost: '550',
        date: '12/20/20',
        img: './public/holidays.png',
        name: 'Holidays',
        },
        {
        id: 2,
        cost: '200',
        date: '12/20/20',
        img: './public/renovation.png',
        name: 'Renovation',
        },
        {
        id: 3,
        cost: '820',
        date: '12/20/20',
        img: './public/xbox.png',
        name: 'Xbox',
        },
        {
        id: 3,
        cost: '820',
        date: '12/20/20',
        img: './public/xbox.png',
        name: 'Xbox',
        },
    ]
    
    return(
        <div className="goals-container">
            <div className="goals__header">
                <p className="goals__title">Goals</p>
                <button className="goals__add-goal">
                    <img src="./public/add.png" alt="button"className="goals__add-icon" />
                </button>
            </div>
            <div className="goals__wrapper">
                <div className="goals__card-container">
                    {goals.map((goal, key) => (
                        <GoalsCard
                        id={goal.id}
                        key={goal.id}
                        cost={goal.cost}
                        date={goal.date}
                        img={goal.img}
                        name={goal.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Goals;