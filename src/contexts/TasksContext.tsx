import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({} as TasksContextProps);

import { CategoryProps } from "./CategoriesContext";

export interface TaskProps {
  category: CategoryProps;
  checked: boolean;
  content: string;
  id: string;
}

interface TasksContextProps {
  tasks: TaskProps[];
  addTask: (newTask: TaskProps) => void;
  removeTask: (id: string) => void;
  updateCheckedStatus: (updatedTask: TaskProps, checked: boolean) => void;
  changeTasksOrder: (result: TaskProps[]) => void;
}

interface Props {
  children?: React.ReactNode;
}

function TasksProvider({ children }: Props) {
  const initialTasks = JSON.parse(localStorage.getItem("userTasksDenys") || "[]");

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (newTask: TaskProps) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateCheckedStatus = (updatedTask: TaskProps, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...updatedTask, checked: checked };
        }
        return task;
      }),
    );
  };



  const changeTasksOrder = (result: TaskProps[]) => {
    var index = 0;

    setTasks(
      tasks.map((task) => {
        if (task.category.slug === result[0].category.slug) {
          task = result[index];
          index++;
        }
        return task;
      }),
    );
  };

  const updateTasks = useEffect(() => {
    localStorage.setItem("userTasksDenys", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, updateCheckedStatus, changeTasksOrder }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
