import { BackgroundProps} from './Background.type'
import './Background.css';

const Background = ({children} : BackgroundProps) => {
    return <div className="background">{children}</div>
}

export default Background;