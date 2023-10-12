import { Link, useLocation } from "react-router-dom";
import {
    BsPersonCircle,
    BsSpeedometer,
    BsBook,
    BsFillCalendarFill,
    BsFillInboxFill,
    BsFillClockFill,
    BsBoxArrowRight,
    BsQuestionCircle
} from "react-icons/bs";
import { PiProjectorScreenChartDuotone } from "react-icons/pi"
import NeuLogo from "../../Northeastern-University-Logo.png";
import "./index.css";
function KanbasNavigation() {
    const navBarItems = [
        { link: "Account", icon: <BsPersonCircle size={32} /> },
        { link: "Dashboard", icon: <BsSpeedometer size={32} /> },
        { link: "Courses", icon: <BsBook size={32} /> },
        { link: "Calendar", icon: <BsFillCalendarFill size={32} /> },
        { link: "Inbox", icon: <BsFillInboxFill size={32} /> },
        { link: "History", icon: <BsFillClockFill size={32} /> },
        { link: "Studio", icon: <PiProjectorScreenChartDuotone size={32} /> },
        { link: "Commons", icon: <BsBoxArrowRight size={32} /> },
        { link: "Help", icon: <BsQuestionCircle size={32} /> }
    ];
    const { pathname } = useLocation();
    return (
        <div id="navbar-content">
            <div id="navbar" className="list-group rounded-0">
                <div className="list-group-item">
                    <img id="NeuLogo" src={NeuLogo} alt="Logo" />
                </div>
                {navBarItems.map((item, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${item.link}`}
                        className={`list-group-item ${
                            pathname.includes(item.link) && "active"
                        } ${item.link}`}
                    >
                        <p>{item.icon}</p>
                        {item.link}
                    </Link>
                ))}
                {/* <div className="list-group-item last-item">
                    asd
                </div> */}
            </div>
        </div>
    );
}
export default KanbasNavigation;
