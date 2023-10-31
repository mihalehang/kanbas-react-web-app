import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
    // const [courses, setCourses] = useState(db.courses);

    // const [course, setCourse] = useState({
    //     name: "New Course",
    //     number: "New Number",
    //     startDate: "2023-09-10",
    //     endDate: "2023-12-15",
    // });
    // const addNewCourse = () => {
    //     setCourses([...courses, { ...course, _id: new Date().getTime() }]);
    // };

    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div>
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <hr />
                <div className="dashboard-courses">
                    <h2>Published Courses</h2>
                    <h5>Course</h5>
                    <div className="course-input">
                        <input
                            value={course.name}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, name: e.target.value })
                            }
                        />
                        <input
                            value={course.number}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, number: e.target.value })
                            }
                        />
                        <input
                            value={course.startDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    startDate: e.target.value,
                                })
                            }
                        />
                        <input
                            value={course.endDate}
                            className="form-control"
                            type="date"
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    endDate: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button
                        onClick={addNewCourse}
                        className="btn btn-light border-dark my-2"
                    >
                        Add
                    </button>
                    <button
                        onClick={updateCourse}
                        className="btn btn-light border-dark my-2"
                    >
                        Update
                    </button>

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
                                        <br />
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                            className="btn btn-light border-dark my-3 mx-2 btn-sm"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-light border-dark my-3 btn-sm"
                                        >
                                            Edit
                                        </button>
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
