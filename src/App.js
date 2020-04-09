import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

import BarChart from './components/barchart';
import BarChartPart2 from './components/barchartPart2';
import Circle from './components/circle';
import ScatterPlot from './components/scatterPlot';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Learn D3
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <BarChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <BarChartPart2 />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Circle />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <ScatterPlot />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
