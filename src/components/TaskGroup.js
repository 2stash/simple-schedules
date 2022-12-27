import React from 'react'
import TaskSchedule from './TaskSchedule'
import TaskScheduleView from './TaskScheduleView'

const TaskGroup = ({tasks, epicName, type, epicSchedule, updateSchedule}) => {
  return (
    <div>
        <div className='mt-4'>EPIC {epicName}</div>
        <TaskScheduleView schedule={epicSchedule} name={epicName} updateSchedule={updateSchedule} type={type}/>
        {tasks && tasks.map( task => (
            <TaskSchedule schedule={task.taskSchedule} name={task.taskName}
            updateSchedule={updateSchedule} type={task.type} epicName={epicName}
            />
        ))}
    </div>
  )
}

export default TaskGroup