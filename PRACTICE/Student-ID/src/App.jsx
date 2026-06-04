import './App.css'
import StudentID from './components/StudentID';
import Student1 from './assets/image.jpeg';
import Student2 from './assets/images2.jpeg';
import Student3 from './assets/images (11).jpeg';
import Student4 from './assets/images (12).jpeg';
import Student5 from './assets/images (13).jpeg';
import Student6 from './assets/images (14).jpeg';
import Student7 from './assets/images (5).jpeg';
import Student8 from './assets/images (7).jpeg';
import Student9 from './assets/IMG-20250308-WA0054.jpg';
import Student10 from './assets/images3.jpeg';

function App() {

  return (
    <div className="school">
      <h2>Computer Science</h2>
      <div className="students">
        <StudentID
          image={Student1}
          name="Okeke Divine Gift"
          id="Ns/Csc/23/8428"
          department="Computer Science"
         className="card"/>
        <StudentID
          image={Student2}
          name="Sylvester"
          id="Ns/Csc/23/8443"
          department="Computer Science"
          className="card"
        />
      </div> 
      <h2>Agricultural Science</h2>
      <div className="students">
        <StudentID
          image={Student3}
          name="Godwin"
          id="Ns/Csc/23/8548"
          department="Agricultural Science"
          className="card"
        />
        <StudentID
          image={Student4}
          name="Sixtus"
          id="Ns/Csc/23/8643"
          department="Agricultural Science"
          className="card"
        />
      </div>
      <h2>Library Science</h2>
      <div className="students">
        <StudentID
          image={Student5}
          name="Joseph"
          id="Ns/Csc/23/8023"
          department="Library Science"
          className="card"
        />
        <StudentID
          image={Student6}
          name="Ceaser"
          id="Ns/Csc/23/8803"
          department="Library Science"
          className="card"
        />
      </div>  
      <h2>Food and Nutrition</h2>
      <div className="students">
        <StudentID
          image={Student7}
          name="Godwin"
          id="Ns/Csc/23/8548"
          department="Food and Nutrition"
          className="card"
        />
        <StudentID
          image={Student8}
          name="Prince"
          id="Ns/Csc/23/8143"
          department="Food and Nutrition"
          className="card"
        />
      </div>
      <h2>Law</h2>
      <div className="students">
        <StudentID
          image={Student9}
          name="Godwin"
          id="Ns/Csc/23/8504"
          department="Law"
          className="card"
        />
        <StudentID
          image={Student10}
          name="Prince"
          id="Ns/Csc/23/8770"
          department="Law"
          className="card"
        />
      </div>
    </div>  
  )
}

export default App;
