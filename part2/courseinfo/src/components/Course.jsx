import { useState } from 'react'
import Part from './Part.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) =>
    course.map( courseItem => {
    return (
        <div key = {courseItem.id}>
            <Header title={courseItem.name} />
            <Content part={courseItem.parts} />
            <Total parts={courseItem.parts} />
        </div>
    )
    })

export default Course;