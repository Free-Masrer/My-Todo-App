import React, {
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from "react-beautiful-dnd";

import { IoIosArrowDropdown } from 'react-icons/io';

import { v4 as uuid } from "uuid";

import Task from "../Task/task";
import Select from "../select/select";

import useShortcut from "@hooks/useShortcut";

import { CategoriesContext, CategoryProps } from "@contexts/CategoriesContext";
import { PathContext } from "@contexts/PathContext";
import { TasksContext, TaskProps } from "@contexts/TasksContext";


import {
  MainStyle,
  formInput,
  newTodoForm,
  selectSelector,
  taskList,
  taskContent,
  dropdownIconStyle,
  iconStyle,
} from "./main.css";

import { selectBox } from "@assets/styles/box.css";
import { typographyStyle } from "@assets/styles/headding.css";
import { containerStyles } from "@assets/styles/container.css";
import { todoAppName } from "./text";



function Todo() {
  const { categories } = useContext(CategoriesContext);
  const { path } = useContext(PathContext);
  const { tasks, addTask, changeTasksOrder } = useContext(TasksContext);

  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState<CategoryProps>(categories[0]);
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const [checkedTasksInCategory, setCheckedTasksInCategory] = useState<TaskProps[]>([]);

  const [isMobile] = useState(window.innerWidth <= 390);
  const [isMb] = useState(window.innerWidth <= 768);

  const spanIcon = `${dropdownIconStyle} ${iconStyle}`;

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();

    const content = inputRef.current?.value;

    if (!content) return;


    const newTask: TaskProps = {
      category: category,
      checked: checked,
      content: content,
      id: uuid(),
    };

    addTask(newTask);

    formRef.current?.reset();
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [checked, isSelectingCategory]);

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  const filteredTasks = tasks.filter((task) => task.category.slug === path);

  const shortcuts = [
    {
      ctrlKey: true,
      key: "S",
      handler: () => inputRef.current?.focus(),
    },
    {
      ctrlKey: false,
      key: "Escape",
      handler: () => inputRef.current?.blur(),
    },
  ];

  useShortcut(shortcuts);

  useEffect(() => {
    const categoryBasedOnCurrentPath = categories.filter((category) => category.slug === path)[0];

    setCategory(categoryBasedOnCurrentPath);
  }, [path, categories]);

  useEffect(() => {
    const filteredTasksInCategory = tasks.filter(
      (task) => task.category.slug === path && task.checked
    );
    setCheckedTasksInCategory(filteredTasksInCategory);
  }, [tasks, path]);

  function handleChangeTasksOrder(result: DropResult) {
    if (!result.destination) return;

    const currentListTasks = tasks.filter((task) => task.category.slug === path);

    const items = Array.from(currentListTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    changeTasksOrder(items);
  }

  const completionPercentage = filteredTasks.length > 0 ? Math.floor((checkedTasksInCategory.length / filteredTasks.length) * 100) : 0;

  return (
    <div className={MainStyle}
    >
      <div className={containerStyles({
        display: "flex",
        direction: "column",
        gap: "medium",
        justifyContent: "center",
        alignItems: "center",
        padding: "taskArea",
      })} id="tasks-area-wrapper">
        <div className={containerStyles({
          display: "flex",
          direction: "column",
          padding: "default",
          alignItems: "center"
        })}>
          <h1 className={typographyStyle({
            role: "h1",
            padding: "bottomSmall"
          })}>{todoAppName}</h1>

          <h2 className={typographyStyle({
            role: "h2"
          })}>
            Category: <span className={typographyStyle({
              colorVars: "red",
            })}>{categories.filter((category) => category.slug === path)[0]?.title}</span>
          </h2>
        </div>

        <div
          className={containerStyles({
            display: "flex",
            direction: "column",
            alignItems: "center",
            padding: "card"
          })}
          id="task-writer"
          onClick={() => inputRef.current?.focus()}>

          <form
            className={newTodoForm}
            noValidate
            onSubmit={handleAddTask}
            ref={formRef}
          >
            <div className={containerStyles({
              padding: "form"
            })}>
              <label htmlFor="" className={typographyStyle({
                role: "lable",
              })}>Add your Todo here: </label>
            </div>
            <div className={containerStyles({
              display: "flex",
              direction: isMb ? "column" : "row",
              gap: "small",
              justifyContent: "center",
              alignItems: "center",

            })}>
              <input
                className={formInput}
                type="text"
                placeholder="Add your Todo..."
                ref={inputRef}
                onSubmit={handleAddTask}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
              <div
                className={selectBox({
                  display: "flex",
                  margin: "default",
                  opasity: isInputFocused ? "default" : "none",
                  width: isInputFocused ? "default" : "none",
                  focus: checked ? "active" : "default",
                })}
                onClick={() => setIsSelectingCategory(!isSelectingCategory)}
              >
                <div className={selectSelector({
                  display: "flex",
                })}>
                  <span className={typographyStyle({
                    role: "lable",
                  })}>{category.title}</span>
                  <span className={spanIcon}><IoIosArrowDropdown className={iconStyle} /> </span>
                  <Select
                    category={category}
                    setCategory={setCategory}
                    isSelectingCategory={isSelectingCategory}
                    setIsSelectingCategory={setIsSelectingCategory}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className={containerStyles({
            display: "flex",
            direction: isMobile ? "column" : "row",
            gap: "small"

          })}>

            <span className={typographyStyle({
              colorVars: "secondary"
            })}>Completed:</span>
            <span className={typographyStyle({ colorVars: "red" })}>
              {completionPercentage}%
            </span>

          </div>
        </div>
        <DragDropContext onDragEnd={handleChangeTasksOrder}>
          <Droppable droppableId="droppable-tasks">
            {(provided) => (
              <ul
                className={taskList}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={index}
                  >
                    {(provided) => (
                      <div className={taskContent({
                        background: task.checked ? "check" : "default"
                      })}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                      >
                        <Task
                          task={{
                            category: task.category,
                            checked: task.checked,
                            content: task.content,
                            id: task.id,
                          }}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Todo;
