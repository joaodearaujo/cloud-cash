import { SidebarItemsProps } from "./Sidebar.type"
import './Sidebar.css';

const SidebarItem = ({name, img} : SidebarItemsProps ) => {

    return (       
            <a href="#" className="item__link">
                <img src={`${img}`} alt="Item icon" className="item__icon" />
                <p className="item-name">{name}</p>
            </a>    
        )
}

const Sidebar = () => {
    const SidebarItems: SidebarItemsProps[] = [
        {name:'Financials', img:'./public/financials.png'},
        {name:'Cards ', img:'./public/card.png'},
    ]
    return (
        <div className="sidebar-container">
            <img src="./public/cloud-cash.png" alt="Sidebar Icon" className="sidebar__icon" />
            <nav className="sidebar__links-container">
                {SidebarItems.map((item, index) => (
                    <SidebarItem key={index} {...item}/>
                ))}
            </nav>
        </div>)
}

export default Sidebar;