import React, { useRef, useContext, useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { v4 as uuid } from 'uuid'

import Todos from "../todos/todos";
import Select from "../select/select";
import useShortcut from "../../hooks/useShortcut";

import { CategoriesContext, CategoryProps } from "../../context/CategoriesContext";
import { PathContext } from "../../context/PathContext";
import { TasksContext, TaskProps } from "../../context/TasksContext";
import { UserContext } from "../../context/UserContext";

import {
    MainStyle,
    formInput,
    Left,
    LeftLabel,
    checkboxInput,
    newTodoForm,
    right
} from "./mine.css";
import Header from "./header/header";

import { checkboxStyle } from '../../assets/styles/buttons.css'

function Mine() {


    return (
        <>
            <div className={MainStyle}>
                <div id="tasks-area-wrapper">
                    <Header />
                    <div id="task-writer" >
                        <div className={Left}>
                            <label className={LeftLabel}>
                                <input className={checkboxInput} type="checkbox" />
                                <div className={checkboxStyle({
                                    opacityTransform: "n",

                                })} />
                            </label>
                            <form className={newTodoForm}>
                                <input className={formInput} type="text" placeholder="Add new todo..." />
                            </form>
                        </div>
                        <div className={right} >
                            <h4>Cat title</h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Mine;