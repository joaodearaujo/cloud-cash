import './MainCard.css';
import { MainCardProps } from './MainCard.type';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';

interface UserProfile {
  name: string;
  role: 'Manager' | 'Internship';
  img: string; 
}

const user: UserProfile = {
  name: 'João de Araújo',
  role: 'Internship',
  img: '/profile-image.png'
}
const MainCard = () => {
  return <div className="main-card">
          <Sidebar/>
          <Header {...user}/>
          <Main/>
        </div>
}
export default MainCard;