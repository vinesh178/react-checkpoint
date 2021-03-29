import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import Task from "./Task";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    background: "#80b3ff",
  },
});

const Checkpoint = ({
  checkpoint,
  onCheckpointDelete,
  onTaskDelete,
  onTaskToggle,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={1} className={classes.root}>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlined
                onClick={() => onCheckpointDelete(checkpoint.id)}
              />
            </IconButton>
          }
          title={checkpoint.checkpointDescription}
        />

        <CardContent>
          <Typography>Percent Complete : {checkpoint.percentComplete} % </Typography>
          <Typography component={"span"} variant="body2" color="textSecondary">
            {checkpoint.taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskDelete={onTaskDelete}
                checkpointId={checkpoint.id}
                onTaskToggle={onTaskToggle}
              ></Task>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkpoint;
