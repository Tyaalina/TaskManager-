import React from 'react';
import { useState} from 'react'
import InputTask from '../src/elements/InputTask'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%'
    },
    paper: {
        width: 'max-content',
        height: 'max-content',
        margin: 'auto',
        padding: theme.spacing(4)
    },
    text: {
        margin: 'auto'
    }
}));

export default function ToDoApp() {
    const classes = useStyles();
    const [tasks, setTasks] = useState([])

    async function handleSubmit(input) {
      console.log(input)
    }

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.paper}>
                <Typography align="center" variant="h6" gutterBottom="true">TO DO LIST</Typography>
                <InputTask handleSubmit={handleSubmit} />
            </Paper>
        </div>
    );
}
