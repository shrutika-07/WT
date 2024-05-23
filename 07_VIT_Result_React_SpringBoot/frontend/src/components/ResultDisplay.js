// ResultDisplay.js
import React from 'react';
import '../css/ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  console.log(result);

  const calculateOverallPercentage = (subjects) => {
    const totalMarks = subjects.reduce(
      (total, subject) => total + subject.endSemMarks,
      0
    );
    const overallPercentage = ((totalMarks / (50 * subjects.length)) * 100).toFixed(2);
    return overallPercentage;
  };

  return (
    <div className='result-container'>
      <h2>Student Result</h2>
      {result ? (
        <div>
          <h3>PRN: {result.prn}</h3>
          <div className='result-table'>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Mid Sem Marks</th>
                  <th>End Sem Marks</th>
                </tr>
              </thead>
              <tbody>
                {result.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.midSemMarks}</td>
                    <td>{subject.endSemMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Overall Percentage: {calculateOverallPercentage(result.subjects)}%</p>
        </div>
      ) : (
        <p>No result found for the provided PRN.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
