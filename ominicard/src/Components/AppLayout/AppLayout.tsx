import './AppLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Content from '../Content/Content';

const AppLayout = () => {
  return (
    <div className="overview">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <Content />
      </div>
    </div>
  );
}

export default AppLayout;