import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <hr />
                <div className="dashboard-courses">
                    <h2>Published Courses</h2>
                    <div className="course-cards d-flex flex-wrap">
                        {courses.map((course) => (
                            <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                                className="list-group-item"
                            >
                                <div className="card">
                                    <div className="card-splash rounded-top"></div>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {course.name}
                                        </h6>
                                        {course.number} <br />
                                        Start: {course.startDate} End:{" "}
                                        {course.endDate}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
