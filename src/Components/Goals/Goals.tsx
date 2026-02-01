import { GoalsProps } from "./Goals.type";

const Goals = ({children} : GoalsProps) => {
    return(<div className="goals-container">
        {children}
    </div>)
}

export default Goals;