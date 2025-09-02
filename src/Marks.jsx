import React from 'react'

function Marks({ name, roll, marks }) {
  const isPassed = marks >= 40;
  return (
    <>
      <h1>Student Score Detail</h1>
      <p>Name: {name}</p>
      <p>Roll No: {roll}</p>
      <p>Marks: {marks}</p>
      <p>Status: {isPassed ? "Pass" : "Failed"}</p>
    </>
  )
}

export default Marks