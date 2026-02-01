import { CardsProps } from "./Cards.type"

const Cards = ({children} : CardsProps) => {
    return(<div className="cards-container">
        {children}
    </div>)
}

export default Cards;