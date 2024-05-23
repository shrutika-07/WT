// StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/StudentForm.css';

const StudentForm = () => {
  const [prn, setPrn] = useState('');
  const [subjects, setSubjects] = useState([
    { name: '', midSemMarks: '', endSemMarks: '' },
    { name: '', midSemMarks: '', endSemMarks: '' },
    { name: '', midSemMarks: '', endSemMarks: '' },
    { name: '', midSemMarks: '', endSemMarks: '' },
  ]);

  const handleInputChange = (index, event) => {
    const newSubjects = [...subjects];
    newSubjects[index][event.target.name] = event.target.value;
    setSubjects(newSubjects);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('http://localhost:8082/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prn,
          subjects,
        }),
      }).then(res => res.json()).then(result => console.log(result));
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Enter Student Details</h2>
      <label className="text">

      
      <label>
        PRN:
        <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} className="input" />
      </label>

      {subjects.map((subject, index) => (
        <div key={index} className="subject-container">
          <label className='text'>
            Subject Name:
            <br/>

                        <input
              type="text"
              name="name"
              value={subject.name}
              onChange={(e) => handleInputChange(index, e)}
              className="input"
            />
          </label>
          <label>
            Mid Sem Marks:
            <input
              type="number"
              name="midSemMarks"
              value={subject.midSemMarks}
              onChange={(e) => handleInputChange(index, e)}
              className="input"
            />
          </label>
          <label>
            End Sem Marks:
            <input
              type="number"
              name="endSemMarks"
              value={subject.endSemMarks}
              onChange={(e) => handleInputChange(index, e)}
              className="input"
            />
          </label>
        </div>
      ))}

      <button type="submit" className="submit-button">Submit</button>
      </label>
    </form>
  );
};

export default StudentForm;
