import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Checkbox } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const Task = ({ task, onTaskDelete, checkpointId, onTaskToggle }) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox
              style={{ color: "#000000" }}
              checked={task.completed}
              edge="start"
              tabIndex={-1}
              disableRipple
              onChange={() => onTaskToggle(task)}
            />
          </ListItemIcon>
          <ListItemText primary={task.taskDescription} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => onTaskDelete(checkpointId, task.id)} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default Task;
