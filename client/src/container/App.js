import React, { useState, useEffect} from "react";
import { Container, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from '../store/post/post.action';
import Post from '../components/posts/posts.component';
import Form from '../components/form/form.component';
import Navbar from "../components/Navbar/navbar.component";

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
      <Navbar />
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
