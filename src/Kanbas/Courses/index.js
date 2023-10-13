import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { BsEyeglasses } from "react-icons/bs";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <div className="course-content">
                <div className="course-title">
                    <div className="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li id="breadcrumb-icon">
                                    <RxHamburgerMenu size={24} />
                                </li>
                                <li className="breadcrumb-item breadcrumb-course-number">
                                    {course.number}
                                </li>
                                <li className="breadcrumb-item">
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={<span>Home</span>}
                                        />
                                        <Route
                                            path="Home"
                                            element={<span>Home</span>}
                                        />
                                        <Route
                                            path="Modules"
                                            element={<span>Modules</span>}
                                        />{" "}
                                        <Route
                                            path="Assignments"
                                            element={<span>Assignments</span>}
                                        />
                                        <Route
                                            path="Assignments/:assignmentId"
                                            element={
                                                <span>Assignment Editor</span>
                                            }
                                        />
                                        <Route
                                            path="Grades"
                                            element={<span>Grades</span>}
                                        />
                                    </Routes>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div style={{ flexGrow: 1 }} className="studentview-button">
                        <div className="float-end">
                            <div className="btn btn-light border">
                                <BsEyeglasses
                                    size={24}
                                    className="studentview-button-icon"
                                />
                                Student View
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="course-nav-body">
                    <CourseNavigation />
                    <div className="course-body">
                        <div className="overflow-y-auto">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="Home" />}
                                />
                                <Route path="Home" element={<Home />} />
                                <Route
                                    path="Modules"
                                    element={<Modules />}
                                />{" "}
                                <Route
                                    path="Assignments"
                                    element={<Assignments />}
                                />
                                <Route
                                    path="Assignments/:assignmentId"
                                    element={<h1>Assignment Editor</h1>}
                                />
                                <Route
                                    path="Grades"
                                    element={<h1>Grades</h1>}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;
