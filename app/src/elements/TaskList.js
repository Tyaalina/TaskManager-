import React from 'react';
import List from '@material-ui/core/List';
import Task from "../elements/Task"

export default function TaskList({ tasks, onClickAdd, onClickDeleted }) {

    return (
        <List>
            {tasks.map(task =>
            (<Task
                name={task.name}
                checked={task.checked}
                id={task.id}
                onClickAdd={(id, checked) => onClickAdd(id, checked)}
                onClickDeleted = {(id) => onClickDeleted(id)}>
            </Task>))}
        </List>
    )
}