import { GoalsProps } from "./Goals.type";
import './Goals.css';
import { useRef } from "react";
import { GoalsContainerProps } from "./Goals.type";


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
    
const Goals = ({goals}: GoalsContainerProps) => {

const goalsRef = useRef<HTMLDivElement>(null);

const EventScrollNext = () => {
  if (goalsRef.current) {
    goalsRef.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
};
       
const EventScrollPrevious = () => {
  if (goalsRef.current) {
    goalsRef.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
};

  return(
    
      <div className="goals">
          <div className="goals__header">
              <p className="goals__title">Goals</p>
          </div>
          
              <div className="goals__wrapper">
                  <button className="goals__button goals__button--previous"
                          aria-label="Previous Item"
                          onClick={EventScrollPrevious}
                          >
                      <img src="/left-arrow.png" alt="" aria-hidden="true" className="goals__arrow-icon"/>
                  </button>

                  <div className="goals__item-container " ref={goalsRef} >
                      {goals.map((goal, key) => (
                        <GoalsItem key={goal.id} {...goal}
                        />
                        
                      ))}
                  </div>

                  <button className="goals__button goals__button--next"
                          aria-label="Next Item"
                          onClick={EventScrollNext}
                  >
                      <img src="/right-arrow.png" alt="" aria-hidden="true" className="goals__arrow-icon"/>
                  </button>
              </div>
      </div>
  )
}

export default Goals;