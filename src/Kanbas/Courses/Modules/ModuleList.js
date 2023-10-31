import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { BsCheckCircle, BsGripVertical, BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import {
    AiFillCaretDown,
    AiFillCaretRight,
    AiFillCheckCircle,
    AiOutlinePlus,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addModule, deleteModule, setModule, updateModule } from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                <li className="list-group-item">
                    <h5>
                        Module
                    </h5>
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(
                                        setModule({
                                            ...module,
                                            name: e.target.value,
                                        })
                                    )
                                }
                            />
                            <textarea
                                className="form-control mt-2"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(
                                        setModule({
                                            ...module,
                                            description: e.target.value,
                                        })
                                    )
                                }
                            />
                            <div className="mt-2">
                                <button
                                    className="btn btn-light border-dark mx-1 btn-sm"
                                    onClick={() =>
                                        dispatch(addModule({ ...module, course: courseId }))
                                    }
                                >
                                    Add
                                </button>
                                <button
                                    className="btn btn-light border-dark mx-1 btn-sm"
                                    onClick={() => dispatch(updateModule(module))}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </li>

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
                                    <span>
                                        {module.name} - {module.description}
                                    </span>
                                </div>
                                <div style={{ flexGrow: 1 }}>
                                    <div className="float-end">
                                        <button 
                                            className="btn btn-light border-dark btn-sm"
                                            onClick={() => dispatch(setModule(module))}>
                                            Edit
                                        </button>
                                        <button 
                                            className="btn btn-light border-dark btn-sm mx-2"
                                            onClick={() => dispatch(deleteModule(module._id))}>
                                            Delete
                                        </button>

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
