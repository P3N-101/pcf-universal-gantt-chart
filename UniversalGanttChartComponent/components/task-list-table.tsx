import * as React from "react";
import { Task } from "gantt-task-react";

export const creatTaskListLocal = (
  onClick: (task: Task) => void,
  formatDateShort: (value: Date, includeTime?: boolean) => string
): React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
}> => {
  return ({
    rowHeight,
    rowWidth,
    tasks,
    fontFamily,
    fontSize,
    locale,
    selectedTaskId,
    setSelectedTask,
  }) => {
    debugger;
    return (
      <div
        className="Gantt-Task-List_Wrapper"
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
        }}
      >
        {tasks.map((t) => {
          return (
            <div
              className="Gantt-Task-List_Row"
              style={{ height: rowHeight }}
              key={`${t.id}row`}
            >
              <div
                className={
                  "Gantt-Task-List_Cell Gantt-Task-List_Cell-Select__Icon" +
                  (selectedTaskId === t.id
                    ? " Gantt-Task-List_Cell-Select__Selected"
                    : "")
                }
                onClick={() => {
                  if (selectedTaskId === t.id) {
                    setSelectedTask("");
                  } else {
                    setSelectedTask(t.id);
                  }
                }}
              />
              {/**
               * Name
               */}
              <div
                className="Gantt-Task-List_Cell Gantt-Task-List_Cell__Link"
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
                onClick={() => onClick(t)}
                title={t.name}
              >
                &nbsp;{t.name}
              </div>
              {/**
               * Start Time
               */}
              <div
                className="Gantt-Task-List_Cell"
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
                onClick={() => {
                  if (selectedTaskId === t.id) {
                    setSelectedTask("");
                  } else {
                    setSelectedTask(t.id);
                  }
                }}
                title={formatDateShort(t.start, true)}
              >
                &nbsp;{formatDateShort(t.start, true)}
              </div>
              {/**
               * End Time
               */}
              <div
                className="Gantt-Task-List_Cell"
                style={{
                  minWidth: rowWidth,
                  maxWidth: rowWidth,
                }}
                onClick={() => {
                  if (selectedTaskId === t.id) {
                    setSelectedTask("");
                  } else {
                    setSelectedTask(t.id);
                  }
                }}
                title={formatDateShort(t.end, true)}
              >
                &nbsp;{formatDateShort(t.end, true)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
};
