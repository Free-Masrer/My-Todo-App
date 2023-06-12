import React, { useRef, useState, useContext } from "react";
import Select from "../Select/select";
import { containerStyles } from "@assets/styles/container.css";
import { typographyStyle } from "@assets/styles/headding.css";
import { selectBox } from "@assets/styles/box.css";
import { v4 as uuid } from "uuid";

import {
  newTodoForm,
  formInput,
  selectSelector,
  dropdownIconStyle,
  iconStyle
} from "./todoinput.css";

import { IoIosArrowDropdown } from 'react-icons/io';

import useShortcut from "@hooks/useShortcut";

import { CategoriesContext, CategoryProps } from "@contexts/CategoriesContext";
import { PathContext } from "@contexts/PathContext";
import { TasksContext, TaskProps } from "@contexts/TasksContext";

function TodoInput() {
    const { categories } = useContext(CategoriesContext);
    const { tasks, addTask, changeTasksOrder } = useContext(TasksContext);
    const { path } = useContext(PathContext);

    const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState<CategoryProps>(categories[0]);
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const [checkedTasksInCategory, setCheckedTasksInCategory] = useState<TaskProps[]>([]);

  const [isMobile] = useState(window.innerWidth <= 390);
  const [isMb] = useState(window.innerWidth <= 768);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  

  return (
    <form
      className={newTodoForm}
      noValidate
      onSubmit={handleAddTask}
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
            //opacity: isInputFocused ? "default" : "none",
            width: isInputFocused ? "default" : "none",
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
  );
}

export default TodoInput;
