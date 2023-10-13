import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BsFillFileDiffFill, BsGripVertical, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretDown, AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div>
            <div className="assignment-buttons">
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search For Assignment"
                    />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <div className="float-end assignment-buttons-end">
                        <div className="btn btn-light border">
                            <BsPlusLg />
                            Group
                        </div>
                        <div className="btn btn-danger border">
                            <BsPlusLg />
                            Assignment
                        </div>
                        <div className="btn btn-light border">
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    <div className="assignment-list-title">
                        <div className="title-begin">
                            <span className="grip">
                                <BsGripVertical size={24} />
                            </span>
                            <AiFillCaretDown />
                            <span style={{ fontWeight: "bold" }}>
                                ASSIGNMENTS
                            </span>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div className="float-end title-end">
                                <div
                                    style={{ padding: 5 }}
                                    className="border rounded-pill rounded-lg border-dark"
                                >
                                    40% of Total
                                </div>
                                <div className="plus">
                                    <AiOutlinePlus size={24} />
                                </div>
                                <div>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item"
                    >
                        <div className="assignment-list-content">
                            <div className="assignment-list-content-begin">
                                <span className="grip">
                                    <BsGripVertical size={24} />
                                </span>
                                <span className="edit">
                                    <BsFillFileDiffFill/>
                                </span>
                                <div>
                                    <div style={{ fontWeight: "bold" }}>
                                        {assignment.title}
                                    </div>
                                    {assignment.course}
                                </div>
                            </div>
                            <div className="assignment-list-content-end">
                                <div className="float-end end-icons">
                                    <div className="end-icons-container">
                                        <div className="check">
                                            <AiFillCheckCircle/>
                                        </div>
                                        <div>
                                            <BsThreeDotsVertical />
                                        </div>
                                    </div>

                                </div>    
                            </div>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
export default Assignments;
