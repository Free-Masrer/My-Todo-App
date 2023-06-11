import React, { useContext, useState } from "react";
import { CategoriesContext, CategoryProps } from "../../context/CategoriesContext";
import { PathContext } from "../../context/PathContext";
import { TasksContext } from "../../context/TasksContext";
import { Left, rCategory, taskAmout } from "./categoty.css";

interface CategoryComponentProps {
    category: CategoryProps;
}


function Category({ category }: CategoryComponentProps) {
    const { removeCategory } = useContext(CategoriesContext);
    const { path, changePath } = useContext(PathContext);
    const { tasks, removeTask } = useContext(TasksContext);
  
    const [beingRemoved, setBeingRemoved] = useState("");
    const [slugBeingUpdated, setSlugBeingUpdated] = useState("");
    const [clickPosition, setClickPosition] = useState({ top: 0, left: 0 });

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
        }, 250);
    };

    const removeTasks = (slug: string) => {
        tasks.forEach((task) => (task.category.slug === slug ? removeTask(task.id) : ""));
    };

    const taskAmount = tasks.filter((task) => task.category.slug === category.slug).length;
    return (
        <>
            <div className={Left}>
                <h3>{category.title}</h3>
            </div>
            <span className={taskAmout}>
                <h4>{taskAmount}</h4>
                {category.slug !== "/" && (
                    <button className={rCategory} onClick={(e) => handleRemoveCategory(category.slug, e)}>
                        Remuve
                    </button>
                )}
            </span>
        </>
    );
}
export default Category;