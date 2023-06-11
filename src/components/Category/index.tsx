import React, { useContext, useState } from "react";
import { BsTrash } from 'react-icons/bs';

import { CategoriesContext, CategoryProps } from "@contexts/CategoriesContext";
import { PathContext } from "@contexts/PathContext";
import { TasksContext } from "@contexts/TasksContext";


interface CategoryComponentProps {
  category: CategoryProps;
}

import { containerStyles } from "@assets/styles/container.css";
import { typographyStyle } from "@assets/styles/headding.css";
import { buttonStyles } from "@assets/styles/buttons.css";
import { taskAmountStyle } from "./category.css";


function Category({ category }: CategoryComponentProps) {
  const { removeCategory } = useContext(CategoriesContext);
  const { path, changePath } = useContext(PathContext);
  const { tasks, removeTask } = useContext(TasksContext);

  const [beingRemoved, setBeingRemoved] = useState("");


  const [isHovered, setIsHovered] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 1024);

  function handleRemoveCategory(slug: string, e: React.MouseEvent) {
    e.stopPropagation();

    if (slug === "/") return;

    waitForAnimationAndRemove(slug);

    changePath("/");
  }

  const waitForAnimationAndRemove = (slug: string) => {
    setBeingRemoved(slug);

    setTimeout(() => {
      removeCategory(slug);
      removeTasks(slug);
      setBeingRemoved("");
    }, 2000);
  };

  const removeTasks = (slug: string) => {
    tasks.forEach((task) => (task.category.slug === slug ? removeTask(task.id) : ""));
  };


  const taskAmount = tasks.filter((task) => task.category.slug === category.slug).length;


  return (
    <div
      onClick={() => changePath(category.slug)}
      className={containerStyles({
        display: "flex",
        direction: "row",
        alignItems: "center",
        padding: "default",
        borderRadius: "default",
        background: category.slug === path ? "primary" : "secondary",
        backgroundHover: category.slug === path ? "primary" : "second",
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={containerStyles({
        display: "flex",
        direction: "row",
        alignItems: "center",
        gap: "small",
      })}>
        <span className={typographyStyle({
          role: "lable",
        })}>{category.title}</span>
        {beingRemoved &&
          <span>
            Сategory deleted
          </span>}
      </div>
      {category.slug !== "/" && (
        <button className={buttonStyles({
          display: "default",
          justifyItems: "center",
          buttons: "primary",
          margin: isMobile ? "none" : "default",
          padding: isMobile ? "small" : "default",
          vars: isHovered ? "show" : "hide",
          transition: "default",
        })} onClick={(e) => handleRemoveCategory(category.slug, e)}>
          <BsTrash />
        </button>
      )}
      <span className={taskAmountStyle}>
        <span
          className={typographyStyle({
            role: "lable",
            colorVars: "secondary",
          })}>{taskAmount}</span>
      </span>
    </div>
  );
}

export default Category;
