import React from 'react';
import { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TaskList from '../elements/TaskList'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function TaskTab() {
    const [value, setValue] = React.useState(0);
    const [tasks, setTasks] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                <Tab label="All" icon={<VisibilityIcon />} />
                <Tab label="Active" icon={<BuildIcon />} />
                <Tab label="Completed" icon={<DoneAllIcon />} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TaskList tasks={tasks}/>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <TaskList tasks={tasks}/>
      </TabPanel>
            <TabPanel value={value} index={2}>
                <TaskList tasks={tasks}/>
      </TabPanel>
        </div>
    )
}