import React, {useState, useEffect} from "react";
import { Grow, Grid, Container, Paper, AppBar, TextField, Button} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

import Paginate from "../../components/pagination/pagination.component";
import Posts from "../../components/posts/posts.component";
import CreatePost from "../../components/create-post/create-post.component";
import { getPosts } from '../../store/post/post.action';

import useStyles from './home.styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    return (<Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-around" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CreatePost currentId={currentId} setCurrentId={setCurrentId}/>
                            <Paper elevation={6} className={classes.pagination}>
                                <Paginate />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>)
};

export default Home;