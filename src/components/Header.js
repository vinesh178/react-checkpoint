import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#0066ff",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Typography variant="h2">Project Checkpoints</Typography>
      </Container>
    </div>
  );
};

export default Header;
