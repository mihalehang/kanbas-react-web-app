import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import {
    BsCheckCircle,
    BsGripVertical,
    BsPlusLg,
    BsThreeDotsVertical,
} from "react-icons/bs";
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiFillCheckCircle,
    AiOutlinePlus,
} from "react-icons/ai";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="module-list-container">
            <div className="course-buttons float-end">
                <div className="btn-toolbar">
                    <div className="btn btn-light border">Collapse All</div>
                    <div className="btn btn-light border">View Progress</div>
                    <div className="dropdown">
                        <button
                            className="btn btn-light border dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <BsCheckCircle className="publish-icon" />
                            Publish All
                        </button>
                    </div>
                    <div className="btn btn-danger border">
                        <BsPlusLg />
                        Modules
                    </div>
                    <div className="btn btn-light border">
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />

            <ul className="list-group modules-list">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li
                            key={index}
                            className="list-group-item border list-group-item-light rounded-0"
                        >
                            <div className="module-list-content">
                                <div>
                                    <BsGripVertical size={24} />
                                    <AiFillCaretRight size={24} />
                                    <span>{module.name}</span>
                                </div>
                                <div style={{ flexGrow: 1 }}>
                                    <div className="float-end">
                                        <AiFillCheckCircle className="module-list-icon-check" />
                                        <AiFillCaretDown />
                                        <span className="mx-3">
                                            <AiOutlinePlus />
                                        </span>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;
