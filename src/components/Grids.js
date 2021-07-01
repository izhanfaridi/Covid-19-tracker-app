import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Papers from './Papers'
import ContList from './ContList';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Grids() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}><Papers></Papers></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}><ContList/></Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}