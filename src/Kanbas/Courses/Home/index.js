import {
    BsBell,
    BsBoxArrowRight,
    BsDot,
    BsFillFileBarGraphFill,
    BsMegaphone,
} from "react-icons/bs";
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import { TbFileImport } from "react-icons/tb";
import { BiTargetLock } from "react-icons/bi";
import { PiNumberCircleFiveDuotone } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

function Home() {
    const statusOptions = [
        { name: "Import Existing Content", icon: <TbFileImport /> },
        { name: "Import From Commons", icon: <BsBoxArrowRight /> },
        { name: "Choose Home Page", icon: <BiTargetLock /> },
        { name: "View Course Stream", icon: <BsFillFileBarGraphFill /> },
        { name: "New Announcement", icon: <BsMegaphone /> },
        { name: "New Analytic", icon: <BsFillFileBarGraphFill /> },
        { name: "View Course Notifications", icon: <BsBell /> },
    ];

    const todoItems = [
        {title: "Grade A1 - ENV + HTML", grade: "100 Points", due: "Sep 18 at 11:59pm"},
        {title: "Grade A2 - CSS + Boostrap", grade: "100 Points", due: "Oct 2 at 11:59pm"},
    ];

    return (
        <div className="home-content">
            <ModuleList />
            <div className="status-bar-content">
                {statusOptions.map((item) => (
                    <div className="course-status-button">
                        <button type="button" className="btn btn-light border">
                            {item.icon}
                            {item.name}
                        </button>
                    </div>
                ))}
                <div>
                    <h5>To Do</h5>
                    <hr />
                    <div>
                        {todoItems.map((item) => (
                            <div className="todo-content">
                                <span className="todo-number-icon"><PiNumberCircleFiveDuotone size={24} /></span>
                                <div>
                                    <span className="todo-title">
                                        {item.title}
                                    </span>
                                    <br/>
                                    <span>
                                        {item.grade}
                                        <BsDot/>
                                        {item.due}
                                    </span>
                                </div>
                                <div style={{flexGrow: 1}}>
                                    <div className="float-end">
                                        <AiOutlineClose size={12}/>
                                    </div>
                                </div>
                            </div>    
                        ))

                        }
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Home;
