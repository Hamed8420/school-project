import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/use" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>User Page</span>
            </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Teachers</span>
            </li>
          </Link>


          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Student</span>
            </li>
          </Link>


          <li>
            <CreditCardIcon className="icon" />
            <span>Live broadcast</span>
          </li>
        
          <Link to="/lessons" style={{ textDecoration: "none" }}>
            <li>
            <LocalShippingIcon className="icon" />

              <span>Lessons</span>
            </li>
          </Link>

          
          <Link to="/chat" style={{textDecoration:"none"}}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Chat</span>
          </li>
          </Link>

          <p className="title">USEFUL</p>

<Link to="/books" style={{textDecoration:"none"}}>
          <li>
            <InsertChartIcon className="icon" />
            <span>books</span>
          </li>
          </Link>
          
      
          
          <Link to="/notifcation" style={{textDecoration:"none"}}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>

          <Link to="/service" style={{textDecoration:"none"}}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Service</span>
          </li>
          </Link>


          <Link to="/studentTable" style={{textDecoration:"none"}}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>markers</span>
          </li>
          </Link>
       


       
          <Link to="/classes" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>All Classes</span>
          </li>
          </Link>


          <Link to="/order" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>


          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
