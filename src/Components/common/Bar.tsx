import './Bar.css'
import { BarProps } from './common.type';

const Bar = ({percentage, color}: BarProps) => {
    return (
        <div className="bar">
            <div 
                className="bar__fill" 
                style={{
                    width: `${percentage ?? 0}%`, 
                    backgroundColor: color 
                }}
            ></div>
        </div>
    )
}

export default Bar;