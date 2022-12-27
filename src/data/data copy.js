export const DATA = {
  epics: [
    {
      epicName: "AAA",
      type: "epic",
      epicSchedule: new Array(10).fill(false),
      taskList: ["Task1", "Task2", "Task3"],
      tasks: [
        {
          taskName: "Task1",
          type: "task",
          epicName: "AAA",
          taskSchedule: new Array(10).fill(false),
          subTasks: [
            {
              subTaskName: "taska",
              subTaskSchedule: new Array(10).fill(false),
            },
            {
              subTaskName: "taskb",
              subTaskSchedule: new Array(10).fill(false),
            },
            {
              subTaskName: "taskc",
              subTaskSchedule: new Array(10).fill(false),
            },
          ],
        },
        {
            taskName: "Task2",
            type: "task",
            epicName: "AAA",
            taskSchedule: new Array(10).fill(false),
            subTasks: [
              {
                subTaskName: "taska",
                subTaskSchedule: new Array(10).fill(false),
              },
              {
                subTaskName: "taskb",
                subTaskSchedule: new Array(10).fill(false),
              },
              {
                subTaskName: "taskc",
                subTaskSchedule: new Array(10).fill(false),
              },
            ],
          },
          {
            taskName: "Task3",
            type: "task",
            epicName: "AAA",
            taskSchedule: new Array(10).fill(false),
            subTasks: [
              {
                subTaskName: "taska",
                subTaskSchedule: new Array(10).fill(false),
              },
              {
                subTaskName: "taskb",
                subTaskSchedule: new Array(10).fill(false),
              },
              {
                subTaskName: "taskc",
                subTaskSchedule: new Array(10).fill(false),
              },
            ],
          },
      ],
    },
  ],
}
