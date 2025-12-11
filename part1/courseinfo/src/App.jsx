import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
  return(
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) =>
  <div>
    <Part part={part1} exercises={exercises1} />
    <Part part={part2} exercises={exercises2} />
    <Part part={part3} exercises={exercises3} />
  </div>

const Total = ({total}) => {
  return(
  <p>
    Number of exercises {total}
  </p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      } 
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0].name} exercises1={course.parts[0].exercises}  
        part2={course.parts[1].name} exercises2={course.parts[1].exercises}
        part3={course.parts[2].name} exercises3={course.parts[2].exercises} 
      />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App