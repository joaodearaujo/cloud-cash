import { SidebarItemsProps } from "./Sidebar.type"
import './Sidebar.css';

const SidebarLink = ({name, img} : SidebarItemsProps ) => {

    return (       
            <a href="#" className="link">
                <img src={`${img}`} alt="Item icon" className="link__icon" />
                {name}
            </a>    
        )
}

const Sidebar = () => {
    const SidebarItems: SidebarItemsProps[] = [
        {name:'Financials', img:'./public/financials.png'},
        {name:'Cards ', img:'./public/card.png'},
    ]
    return (
        <div className="sidebar">
            <img src="./public/cloud-cash.png" alt="Sidebar Icon" className="sidebar__icon" />
            <nav className="sidebar__links-container">
                {SidebarItems.map((item, index) => (
                    <SidebarLink key={index} {...item}/>
                ))}
            </nav>
        </div>)
}

export default Sidebar;