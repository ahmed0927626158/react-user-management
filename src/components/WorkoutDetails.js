import React from 'react'
import './componentCss/Workout.css'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
function WorkoutDetails({workout}) {
const {dispatch}=useWorkoutContext()

  const deleteWorkout=async()=>{
    const response= await fetch("/api/workouts/"+ workout._id,{
      method:"DELETE"
    })

    const json=await response.json()
    if(!response.ok){
console.log(response.error)
    }

    if(response.ok){
     dispatch({type:"DELETE_WORKOUT",payload: json})
    }
  }
  return (
    <div className='workout-details'>
      <h1>MAKE YOUR LIFE EASY</h1>
         <h4>{workout.title}</h4>
         <p><strong>Load (kg):</strong>{workout.load}</p>
         <p><strong>Reps </strong>{workout.reps}</p>
         <p>{workout.createdAt}</p>
         <span onClick={deleteWorkout}>Delete</span>
    </div>
  )
}

export default WorkoutDetails
