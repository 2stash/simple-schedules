import React, { useState } from "react"
import TaskGroup from "./components/TaskGroup"
import { DATA } from "./data/data"

const App = () => {
  const [epics, setEpics] = useState(DATA.epics)
  console.log(epics)

  const updateSchedule = (taskToUpdate, idx, type, epicName) => {
    console.log(taskToUpdate, idx, type)
    if ((type = "task")) {
      updateTaskSchedule(taskToUpdate, idx, epicName)
    }
  }

  const updateTaskSchedule = (taskToUpdate, idx, epicName) => {
    console.log(taskToUpdate, idx)
    let taskStatus = false
    const updateData = JSON.parse(JSON.stringify(epics))
    updateData.map((epic) => {
      if ((epic.epicName = epicName)) {
        epic.tasks.map((task) => {
          if (task.taskName == taskToUpdate) {
            taskStatus = !task.taskSchedule[idx]
            task.taskSchedule[idx] = !task.taskSchedule[idx]
          }
        })
      }
    })

    if(taskStatus == true){
      updateData.map((epic) => {
        if (epic.epicName == epicName) {
          epic.epicSchedule[idx] = taskStatus
        }
      })
    } else {
      const shouldWeUpdateEpic = checkForOtherScheduleTasks(
        taskToUpdate,
        idx,
        epicName,
        taskStatus
      )
      if (shouldWeUpdateEpic == true) {
        updateData.map((epic) => {
          if (epic.epicName == epicName) {
            epic.epicSchedule[idx] = taskStatus
          }
        })
      }
    }

    setEpics(() => updateData)
  }

  const checkForOtherScheduleTasks = (
    taskToIgnore,
    idx,
    epicName,
    statusToCheck
  ) => {
    let anyOtherTasksTrue = false
     epics.map((epic) => {
      if (epic.epicName == epicName) {
        epic.tasks.map((task) => {
          if(taskToIgnore != task.taskName){
            if (task.taskSchedule[idx] == true) {
              anyOtherTasksTrue = true
            }
          }
        })
      }
    })

    let shouldEpicBeUpdate = false
    if(anyOtherTasksTrue == false && statusToCheck == false){
      shouldEpicBeUpdate = true
    } 
    console.log(shouldEpicBeUpdate)
    return shouldEpicBeUpdate
  }

  return (
    <div className="flex justify-center bg-slate-900 h-screen">
      {epics &&
        epics.map((epic) => (
          <div
            className="flex justify-center bg-slate-100"
            style={{ width: "1200px" }}
          >
            <div>
              <h1 className="text-center text-4xl mt-12">Simple Schedule</h1>
              <TaskGroup
                tasks={epic.tasks}
                epicName={epic.epicName}
                type={epic.type}
                epicSchedule={epic.epicSchedule}
                updateSchedule={updateSchedule}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default App
