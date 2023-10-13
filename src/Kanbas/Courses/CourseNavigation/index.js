import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const courseNavItems = [
        { links: "Home", name: "Home" },
        { links: "Modules", name: "Modules" },
        { links: "Piazza", name: "Piazza" },
        { links: "Zoom_Meetings", name: "Zoom Meetings" },
        { links: "Assignments", name: "Assignments" },
        { links: "Grades", name: "Grades" },
        { links: "Quizzes", name: "Quizzes" },
        { links: "People", name: "People" },
    ];

    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div
            id="coursebar"
            className="list-group rounded-0"
            style={{ width: 150 }}
        >
            <div className="course-bar-title list-group-item">
                202410_1 Fall 2023 Semester
            </div>
            {courseNavItems.map((item, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${item.links}`}
                    className={`list-group-item ${
                        pathname.includes(item.links) && "active"
                    }`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

export default CourseNavigation;
