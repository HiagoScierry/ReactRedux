import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title){
    return { type: 'ADD_COURSE' , title} 
}


function CourseList() {
    const courses = useSelector(state => state.data)
    const dispatch = useDispatch()

    const [value, setValue] = useState('')



    function addCourse(){
        if(value !== ''){
            dispatch(addCourseAction(value))
            setValue('')

        }
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
            <button type='button' onClick={addCourse}>Adicionar Curso</button>
        </>
    );
}

export default CourseList;