import React from 'react'

const TaskSchedule = ({schedule, name, updateSchedule, type, epicName}) => {

    const bgColorSelected = "bg-cyan-400"
    const bgColorNotSelected = "bg-gray-400"
   
  return (
    <div className='flex mt-8' style={{width: "600px"}}>
        <div className='w-40'>{name}</div>
        <div className='grow grid grid-flow-col auto-cols-fr bg-gray-400'>
            {schedule.map((item, idx) => (
                <div className={`border-solid border-2 
                ${item == true ? 'bg-cyan-400' : 'bg-gray-400'}`} onClick={()=> updateSchedule(name, idx, type, epicName)}>{idx}</div>
            ))}
        </div>
    </div>
  )
}

export default TaskSchedule