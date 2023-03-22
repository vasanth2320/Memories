import React, { useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from '../store/post/post.action';
import memories from '../assets/images/memories.png';
import Post from '../components/posts/posts.component';
import Form from '../components/form/form.component';

import useStyles from './App.styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"> Memories </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
          <Container>
            <Grid container className={classes.mainContainer} justifyContent="space-around" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Post setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
      </Grow>
    </Container>
  );
};

export default App;
