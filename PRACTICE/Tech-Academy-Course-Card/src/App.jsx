import "./App.css";
import CourseCard from "./components/CourseCard";

import htmlCss from "./assets/Html-css.jpeg";
import javascript from "./assets/Javascript.png";
import react from "./assets/React.png";
import nodejs from "./assets/Node.png";
import mongodb from "./assets/Mongodb.png";
import ai from "./assets/Aidev.jpeg";

function App() {
  return (
    <div className="academy">
      <h1>Tech Academy Courses</h1>

      <div className="courses-grid">
        <CourseCard
          thumbnail={htmlCss}
          courseName="HTML & CSS"
          instructor="John Smith"
          duration="6 Weeks"
          level="Beginner"
        />

        <CourseCard
          thumbnail={javascript}
          courseName="JavaScript"
          instructor="Sarah Jones"
          duration="8 Weeks"
          level="Beginner"
        />

        <CourseCard
          thumbnail={react}
          courseName="React Fundamentals"
          instructor="Michael Brown"
          duration="10 Weeks"
          level="Intermediate"
        />

        <CourseCard
          thumbnail={nodejs}
          courseName="Node.js"
          instructor="Emma Wilson"
          duration="8 Weeks"
          level="Intermediate"
        />

        <CourseCard
          thumbnail={mongodb}
          courseName="MongoDB"
          instructor="David Taylor"
          duration="6 Weeks"
          level="Intermediate"
        />

        <CourseCard
          thumbnail={ai}
          courseName="AI Fundamentals"
          instructor="James Carter"
          duration="12 Weeks"
          level="Advanced"
        />
      </div>
    </div>
  );
}

export default App;