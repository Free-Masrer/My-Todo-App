import { useContext, useState } from "react";

import { TasksContext, TaskProps } from "@contexts/TasksContext";

interface TaskComponentProps {
  task: TaskProps;
}

import { containerStyles } from "@assets/styles/container.css";
import { typographyStyle } from "@assets/styles/headding.css";
import { buttonStyles } from "@assets/styles/buttons.css";

import {
  Left,
  LeftLabel,
  Right,
  checkboxDiv,
  checkboxInput
} from "./task.css";

function Task({ task }: TaskComponentProps) {
  const { removeTask, updateCheckedStatus } = useContext(TasksContext);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [checked, setChecked] = useState(task.checked);


  function handleRemoveTask(id: string) {
    setBeingRemoved(id);
    waitForAnimationAndRemove(id);
  }

  const waitForAnimationAndRemove = (id: string) => {
    setTimeout(() => {
      removeTask(id);
    }, 250);
  };

  function handleCheckedStatus() {
    setChecked(!checked);
    updateCheckedStatus(task, !checked);
  }

  return (
    <div className={containerStyles({
      gap: "small",
      display: "flex",
      direction: "row",
    })}
    >
      <div className={Left}>
        <label className={LeftLabel}>
          <input
            className={checkboxInput}
            type="checkbox"
            defaultChecked={checked}
            onChange={() => handleCheckedStatus()}
          />
          <div className={checkboxDiv({
            opacity: checked ? "y" : "n",
            transform: checked ? "x1" : "x2",
            background: checked ? "checked" : "default"
          })} />
        </label>
        <span className={typographyStyle({
          role: "lable",
          colorVars: checked ? "disabled" : "primary"
        })}>{task.content}</span>
         {beingRemoved && <p>Task delete</p>}
      </div>

      <div className={Right}>
        <button
          className={buttonStyles({
            buttons: "primary",
          })}
          onClick={() => handleRemoveTask(task.id)}>
          <span>Delete </span>
        </button>
      </div>
    </div>
  );
}

export default Task;
