import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkpoint from "./Checkpoint";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#0066ff",
  },
 
});

const Checkpoints = ({
  checkpoints,
  onCheckpointDelete,
  onTaskDelete,
  onTaskToggle
  
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          {checkpoints.map((checkpoint) => (
            <Grid item xs={12} md={4} lg={6} key={checkpoint.id}>
              <Checkpoint
                checkpoint={checkpoint}
                onCheckpointDelete={onCheckpointDelete}
                onTaskDelete={onTaskDelete}
                onTaskToggle={onTaskToggle}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Checkpoints;
