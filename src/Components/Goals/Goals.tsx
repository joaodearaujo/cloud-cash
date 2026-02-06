import { GoalsProps } from "./Goals.type";
import './Goals.css';


const goals = [
  {
    id: 1,
    cost: '550',
    date: '12/20/20',
    img: './public/holidays.png',
    name: 'Holidays',
  },
  {
    id: 2,
    cost: '1200',
    date: '05/15/21',
    img: './public/renovation.png',
    name: 'Home Renovation',
  },
  {
    id: 3,
    cost: '3500',
    date: '08/10/21',
    img: './public/xbox.png',
    name: 'Xbox Series X',
  },
  {
    id: 4,
    cost: '800',
    date: '01/12/22',
    img: './public/holidays.png',
    name: 'Beach Trip',
  },
  {
    id: 5,
    cost: '2500',
    date: '03/20/22',
    img: './public/renovation.png',
    name: 'Kitchen Setup',
  },
  {
    id: 6,
    cost: '500',
    date: '06/05/22',
    img: './public/xbox.png',
    name: 'New Games',
  },
  {
    id: 7,
    cost: '1500',
    date: '09/15/22',
    img: './public/holidays.png',
    name: 'Winter Break',
  },
  {
    id: 8,
    cost: '4000',
    date: '11/30/22',
    img: './public/renovation.png',
    name: 'Bedroom Remodel',
  },
  {
    id: 9,
    cost: '450',
    date: '02/14/23',
    img: './public/xbox.png',
    name: 'Xbox Controller',
  },
  {
    id: 10,
    cost: '2000',
    date: '04/10/23',
    img: './public/holidays.png',
    name: 'Euro Summer',
  }
]

const GoalsItem = ({cost, date, img, name} : GoalsProps) => {
    return (
        <div className="item">
            <div className="item__values">
                <h1 className="item__cost">{`$${cost}`}</h1>
                <h3 className="item__date">{`${date}`}</h3>
            </div>
            <div className="item__label">
                <img src={`${img}`} alt="Goal Image" className="item__icon"/>
                <h2 className="item__name">{name}</h2>
            </div>
        </div>
    )   
}

const Goals = () => {
       
    return(
        <div className="goals">
            <div className="goals__header">
                <p className="goals__title">Goals</p>
                <button className="goals__add-goal"

                >
                    <img src="./public/add.png" alt="button"className="goals__add-icon" />
                </button>
            </div>
            
                <div className="goals__wrapper">
                    <button className="goals__button goals__button--previous"
                            aria-label="Next Item"
                    >
                       <img src="/left-arrow.png" alt="" aria-hidden="true" className="goals__arrow-icon"/>
                    </button>

                    <div className="goals__item-container" >
                        {goals.map((goal, key) => (
                            <GoalsItem key={goal.id} {...goal}
                            />
                            
                        ))}
                    </div>

                    <button className="goals__button goals__button--next"
                            aria-label="Next Item"
                    >
                       <img src="/right-arrow.png" alt="" aria-hidden="true" className="goals__arrow-icon"/>
                    </button>
                </div>
        </div>
    )
}

export default Goals;