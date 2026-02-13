import Bar from "../common/Bar";
import { CardData } from "./Cards.type"; 
import { CardsProps } from "./Cards.type.ts"
import { useState } from "react";
import './Cards.css'

const Card = ({bankName, cardNumber, typeCard, name, deadline, color }: CardData) => {
    return (
        <div className="card" style={{backgroundColor:`${color}`}}>
            <div className="card__content">
                <div className="card__header">
                    
                    <h1 className="card__brand">{bankName ?? 'Bank'}</h1>
                    <p className="card__type">{typeCard ?? 'Modalite'}</p>
                </div>

                <p className="card__number">{cardNumber ?? '**** **** **** ****'}</p>

                <div className="card__info">

                    <div className="card__group">

                        <p className="card__label">Card holder</p>
                        <p className="card__value">{name ?? 'Owner'}</p>
                    </div>

                    <div className="card__group">

                        <p className="card__label">Expiration date</p>
                        <p className="card__value">{deadline ?? '0/0'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardLimit = ({weeklyLimit, weeklyUsed}: CardData ) => {

    const usedPercentage: number = (weeklyUsed / weeklyLimit) * 100
    
    return (                                                                                                                              
        <div className="limit">
            <Bar percentage={usedPercentage} color="#197bbd"/>
            
            <div className="limit__info">

                <p className="limit__label">Monthly payment limit</p>
                <p className="limit__value">{`$${weeklyUsed ?? '0'} / $${weeklyLimit ?? '0'}`}</p>
            </div>
        </div>
    )
}

const BalanceSummary = ({currentBalance, income, outcome}: CardData) => {
    return (
        <div className="balance-summary">
            <div className="balance__item">

                <p className="balance__amount balance__amount--current">{`$${currentBalance ?? '0'}`}</p>
                <p className="balance__label">Current Balance</p>
            </div>

            <div className="balance__item">

                <p className="balance__amount balance__amount--income">{`$${income ?? '0'}`}</p>
                <p className="balance__label">Income</p>
            </div>

            <div className="balance__item">

                <p className="balance__amount balance__amount--outcome">{`$${outcome ?? '0'}`}</p>
                <p className="balance__label">Outcome</p>
            </div>
        </div>
    )
}

const Cards = ({cards}: CardsProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = () => setCurrentIndex((prev) => (prev + 1 ) % cards.length);
    const prevIndex = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    
    const currentCard = cards[currentIndex];

    return(
    <div className="cards">
        <h1 className="cards__title">Cards</h1>

        <div className="cards__wrapper"> 
            
            <main className="cards__left-column">

                <div className="cards__navigation">

                    <button className="cards__nav-button cards__nav-button--left"
                            onClick={prevIndex}
                            aria-label="Previous Card"
                    >

                        <img src="/left-arrow.png" alt="" aria-hidden="true" className="cards__arrow-icon"/>
                    </button>

                        <Card {...currentCard}/>

                    <button className="cards__nav-button cards__nav-button--right"
                            onClick={nextIndex}
                            aria-label="Next Card"
                    >
                       <img src="/right-arrow.png" alt="" aria-hidden="true" className="cards__arrow-icon"/>
                    </button>
                </div>

                <CardLimit {...currentCard}/>
            </main>

            <hr className="cards__line"/>

            <aside className="cards__right-column">
                
                <BalanceSummary {...currentCard} /> 
            </aside>
        </div>
    </div>
    )
}

export default Cards;