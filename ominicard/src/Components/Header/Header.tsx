import { HeaderProps } from "./Header.type";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__text-area">
                <h1 className="header__title">Overview</h1> 
                <h2 className="header__subtitle">Welcome back! Here's what’s happening with your cards.</h2> 
            </div>
        </div>
    )
}

export default Header;