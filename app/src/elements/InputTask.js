import React from 'react';
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

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

export default function InputTask({handleSubmit}) {
  const classes = useStyles();
  const [input, setInput] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setInput('')
    handleSubmit(input)
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
          onClick={() => {handleSubmit(input); setInput('')}}>
          Add task
        </Button>
      </Grid>
    </form>

  );
}