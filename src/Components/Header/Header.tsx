import { HeaderProps } from "./Header.type";
import './Header.css'

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

const Header = (user: UserProfile) => {
    return (
        <div className="header">
            <div className="header__text-area">
                <h1 className="header__title">Student Life Manager</h1> 
                <h2 className="header__subtitle">Manage your academic life, finances, and daily tasks in one place.</h2> 
            </div>
            <div className="header__user-area">
                <img src={user.img} alt="User Profile Image" className="header__icon" />
                <div className="header__user-info">
                    <h1 className="header__user-name">{user.name}</h1>
                    <h2 className="header__user-role">{user.role}</h2>
                </div>
            </div>
        </div>
    )
}

export default Header;