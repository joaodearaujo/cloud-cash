import './MainCard.css';
import { MainCardProps } from './MainCard.type';

const MainCard = ({children} : MainCardProps) => {
  return <div className="main-card">{children}</div>
}

export default MainCard;