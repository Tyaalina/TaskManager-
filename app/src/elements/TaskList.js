import React from 'react';
import List from '@material-ui/core/List';
import Task from "../elements/Task"
import {useSelector } from 'react-redux';

export default function TaskList() {

    const tasks = useSelector(state => state.tasksList.tasks);

    return (
        <List>
            {tasks.map((task, index) =>
            (<Task
                name={task.name}
                checked={task.completed}
                id={index}>
            </Task>))}
        </List>
    )
}