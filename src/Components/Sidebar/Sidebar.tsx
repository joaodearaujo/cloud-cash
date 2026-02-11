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
        { name: 'Overview', img: '/financials.png' },
        { name: 'Cards', img: '/card.png' },
    ];
    
    return (
        <>
            <p className="side-bar__logo">OmniCard</p>
            <nav className="sidebar__links-container">
                {SidebarItems.map((item, index) => (
                    <SidebarLink key={index} {...item}/>
                ))}
            </nav>
        </>
    )
}

export default Sidebar;