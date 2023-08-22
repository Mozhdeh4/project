import React from "react";
import Gallery from "../images/Gallery.svg"
import Trash from "../images/Trash.svg"


export const Todo = ({task, toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div className="todo">
            <div>

            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "complete":""} `}>{task.task}</p>
            </div>
            <div className="icons">
             <img className="gallery" src={Gallery} alt="i" onClick={() =>
            editTodo(task.id)}/>
             <img className="trash" src={Trash} alt="i" onClick={() =>
            deleteTodo(task.id)}/>
            </div>
        </div>
    )
    }