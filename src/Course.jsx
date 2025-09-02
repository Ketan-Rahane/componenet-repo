import React from "react";

function Course({ courseName, modules }) {
  console.log("Course props:", { courseName, modules });
  
  return (
    <div>
      <h1>Course Information</h1>
      <p>Course Name: {courseName}</p>
      <p>Modules:</p>
      <ul>
        {modules && modules.length > 0 ? (
          modules.map((module, index) => (
            <li key={index}>{module}</li>
          ))
        ) : (
          <li>No modules available</li>
        )}
      </ul>
    </div>
  );
}

export default Course;