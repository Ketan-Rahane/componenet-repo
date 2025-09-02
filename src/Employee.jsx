import React from 'react'

function Employee({ name, salary, department }) {
  return (
    <>
      <h1>Employee Details</h1>
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary.toLocaleString()}</p>
    </>
  )
}

export default Employee
