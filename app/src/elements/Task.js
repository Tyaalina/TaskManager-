import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useDispatch } from 'react-redux';
import { COMPLITED_TASK } from '../redux/types';

export default function Task({ name, checked, id }) {
    const dispatch = useDispatch();
    return (
        <ListItem key={id} dense button onClick={() => dispatch({ type: COMPLITED_TASK, payload: { id: id, name: name, completed: !checked } })}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    color="default"
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={() => console.log}>
                    <DeleteRoundedIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}