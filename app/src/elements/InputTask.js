import React from 'react';
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch} from 'react-redux';
import {CREATE_TASK} from "../redux/types"

const useStyles = makeStyles((theme) => ({
    text: {
        margin: 'auto',
        padding: theme.spacing(1)
    },
    inputFild: {
        margin: 'auto',
    },
    button: {
        margin: theme.spacing(1)
    }
}));

export default function InputTask() {
    const classes = useStyles();
    const [input, setInput] = useState('')

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault()
        setInput('')
        dispatch({type: CREATE_TASK, payload: {name:input, completed: false}})
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container>
                <Typography className={classes.text}>New task: </Typography>
                <TextField label="Task name"
                    variant="outlined"
                    size="small"
                    className={classes.inputFild}
                    value={input}
                    onChange={(event) => setInput(event.target.value)} />
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    className={classes.button}
                    onClick={() => { dispatch({type: CREATE_TASK, payload: {name:input, completed: false}}); setInput('') }}>
                    Add task
        </Button>
            </Grid>
        </form >

    );
}