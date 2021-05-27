import React from 'react';
import {useState} from 'react';

const Courses = ({ courses }) => {

    const sum = 0;
    const [total, setTotal] = useState(0);
  
    const getTotal = () => {
      courses.parts.reduce((sum, part) => {
        console.log(part.exercises);
        sum += part.exercises
        setTotal(sum);
      })
      return(
        <p>{total}</p>
      );
    }


    return ( 
        <div>
            {courses.map(course => 
                <div>
                <h2>{course.name}</h2>
                {course.parts.map(part => 
                    <div>
                    {/* <h2>{course.name}</h2> */}
                    <p>{part.name} {part.exercises}</p>
                    </div>
                )}
                <p><strong>Number of exercises {() => getTotal()}</strong></p>
                </div>
        )}
        </div>
     );
}
 
export default Courses;


