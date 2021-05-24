import React from 'react'
import Header from './components/header';
import Content from './components/content'
import Total from './components/total';

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />

      <Content 
        exercises = {course.parts[0].exercises} part = {course.parts[0].name}
      />
      <Content 
        exercises = {course.parts[1].exercises} part = {course.parts[1].name}
      />
      <Content 
        exercises = {course.parts[2].exercises} part = {course.parts[2].name}
      />

      <Total 
        exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}
      />
    </div>
  )
}

export default App