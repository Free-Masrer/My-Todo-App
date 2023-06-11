import React, { useContext, useRef, useMemo } from "react";

import { Droppable, Draggable, DragDropContext, DropResult } from "react-beautiful-dnd";

import Category from "../Category";

import useShortcut from "../../hooks/useShortcut";

import { PathContext } from "../../contexts/PathContext";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import { RbStyle, completeSpan, progressBar, progressIndicator, separator } from "./catbox.css";
import { containerStyles } from "../../assets/styles/container.css";
import { formInput, newTodoForm } from "../Main/main.css";
import { buttonStyles } from "../../assets/styles/buttons.css";
import { typographyStyle } from "../../assets/styles/headding.css";

import { TasksContext } from "../../contexts/TasksContext";


function Sidebar() {
  const { categories, addCategory, changeCategoriesOrder } = useContext(CategoriesContext);
  const { changePath } = useContext(PathContext);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { tasks } = useContext(TasksContext);

  const checkedTasks = useMemo(() => tasks.filter((task) => task.checked), [tasks]);

  const totalTasks = tasks.length;
  const completedTasks = checkedTasks.length;
  const completionPercentage = totalTasks > 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

  function handleAddCategory(e: React.FormEvent) {
    e.preventDefault();

    const title = inputRef.current?.value;

    if (!title) return;
    if (categories.map((category) => category.title).includes(title)) return;

    const slug = "/" + title.toLowerCase().replace(" ", "-");

    const category = {
      title: title,
      slug: slug,
    };

    addCategory(category);
    formRef.current?.reset();
    changePath(slug);
  }

  const shortcuts = [
    {
      ctrlKey: true,
      key: "D",
      handler: () => inputRef.current?.focus(),
    },
    {
      ctrlKey: false,
      key: "Escape",
      handler: () => inputRef.current?.blur(),
    },
  ];

  useShortcut(shortcuts);

  function handleChangeCategoriesOrder(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    changeCategoriesOrder(items);
  }

  return (
    <div className={RbStyle}>
      <DragDropContext onDragEnd={handleChangeCategoriesOrder}>
        <Droppable droppableId="droppable-categories">
          {(provided) => (
            <nav
              className={containerStyles({
                display: "flex",
                direction: "column",
                alignItems: "center",

              })}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className={containerStyles({
                padding: "sidebar",
              })}>
                <h2 className={typographyStyle({
                  role: "h2",
                  padding: "default",
                })}>Todo categories</h2>
                <div className={separator}></div>
              </div>
              {categories.map((category, index) => (
                <Draggable
                  key={category.slug}
                  draggableId={category.slug}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className={containerStyles({
                        display: "flex",
                        direction: "row",
                        alignItems: "center",
                        gap: "small",
                        padding: "form"

                      })}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      id="category-outer-div"
                    >
                      <Category
                        category={{
                          title: category.title,
                          slug: category.slug,
                        }}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </nav>
          )}
        </Droppable>
      </DragDropContext>
      <div className={containerStyles({
        display: "flex",
        direction: "column",
        padding: "form",
        gap: "small"
      })}>
        <label className={typographyStyle({
          role: "h4",
        })} htmlFor="">Add new category:</label>
        <form
          className={newTodoForm}
          id="add-category-form"
          onSubmit={handleAddCategory}
          noValidate ref={formRef}>
                                        <div className={containerStyles({
                                display: "flex",
                                direction: "column",
                                
                            })}>
          <input
            className={formInput}
            type="text"
            placeholder="Create new category..."
            ref={inputRef} />
          <button
            type="button"
            role=""
            onClick={handleAddCategory}
            className={buttonStyles({
              buttons: "primary",
              margin: "sidebarButton",
            })}>
            <span>Add Category</span>
          </button>
          </div>
        </form>
      </div>
      <div
        className={containerStyles({
          display: "flex",
          direction: "column",
          alignItems: "start",
          border: "top",
          padding: "card",

        })}>
        <div className={containerStyles({
          display: "flex",
          direction: "row",
          alignItems: "center",
          padding: "form",
          gap: "small"

        })}>
          <span
            className={typographyStyle({
              role: "lable",
              colorVars: "secondary",
            })}>
            Completed todos:</span>
          <span className={completeSpan}>{checkedTasks.length}</span>
          <span className={typographyStyle({
            role: "lable",
            colorVars: "secondary",
          })}>of</span>
          <span className={completeSpan}>{tasks.length}</span>

        </div>
        <div className={containerStyles({
          display: "flex",
          direction: "row",
          gap: "small",
          padding: "form",
        })}>
          <span className={typographyStyle({
            colorVars: "secondary",
          })}>Todos done: </span>
          <span className={typographyStyle({
            role: "lable",
            colorVars: "red"
          })}>{completionPercentage}%</span><span className={typographyStyle({
            colorVars: "secondary",
          })}>of 100%</span>
        </div>
        <div>
          <div className={progressBar}>
            <div 
              className={progressIndicator}
              style={{
                width: `${completionPercentage}%`,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
