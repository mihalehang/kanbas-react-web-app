import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="float-end">
                <AiFillCheckCircle />
                Published
                <div className="btn btn-light border edit-dots-icon">
                    <BsThreeDotsVertical />
                </div>
            </div>
            <br />
            <hr />
            <div className="mb-2">Assingment name</div>
            <input value={assignment.title} className="form-control mb-2" />
            <hr />
            <div className="float-end">
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light border"
                >
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2 save-button">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;
