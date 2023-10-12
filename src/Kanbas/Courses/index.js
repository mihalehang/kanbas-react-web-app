import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    console.log(course);
    return (
        <div>
            <div className="course-content">
                <div className="course-title">
                    <h1>Course {course.name}</h1>
                </div>

            </div>
        </div>
    );
}
export default Courses;
