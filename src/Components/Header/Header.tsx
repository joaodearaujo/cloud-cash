import { HeaderProps } from "./Header.type";
import './Header.css'

const Header = ({user}: HeaderProps) => {
    return (
        <div className="header">
            <div className="header__text-area">
                <h1 className="header__title">Weekly sumup</h1> 
                <h2 className="header__subtitle">Get Summary of your weekly online transactions here.</h2> 
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