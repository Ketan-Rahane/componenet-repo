import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './profile.jsx'
import Product from './product.jsx'
import Greeting from './greeting.jsx'
import Blog from './Blog.jsx'
import Marks from './Marks.jsx'
import Employee from './Employee.jsx'
import Movie from './Movie.jsx'
import Shopping from './Shopping.jsx'
import Course from './Course.jsx'
import Weather from './weather.jsx'
function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer"
  }

  const product = {
    productName: "Bluetooth Headphones",
    price: 2499,
    inStock: false
  };

  const greetingProps = {
    name: 'Sneha,'
  };

  const blogPost = {
    title: "Getting Started with React",
    author: "Kunal Verma",
    content: "React is a JavaScript library for building user interfaces..."
  };

  const student = {
    name: "Aditi Sharma",
    roll: 101,
    marks: 35
  };

  const employee = {
    name: "Rajesh Kumar",
    department: "Finance",
    salary: 55000
  };

  const movie = {
    title: "3 Idiots",
    director: {
      name: "Rajkumar Hirani",
      age: 60
    }
  };

  const shopping = {
    item: "Laptop",
    quantity: 2,
    price: "50000"
  };
  const course = {
    courseName: "Full Stack Development",
    modules: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  };

  const weatherData = {
    city: "Delhi",
    temperatureC: 28,
    condition: "Sunny"
  };

  return (
  <>
    <Profile {...user} />
    <hr />
    <Product {...product} />
    <hr />
    <Greeting name="Sneha" />
    <hr />
    <Blog {...blogPost} />
    <hr />
    <Marks {...student} />
    <hr />
    <Employee {...employee} />
    <hr />
    <Movie {...movie} />
    <hr />
    <Shopping {...shopping} />
    <hr />
    <Course {...course} />
    <hr />
    <Weather {...weatherData} />
    <hr />


  </>
)
}

export default App