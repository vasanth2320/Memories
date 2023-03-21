import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../post/post.component';
import useStyles from './posts.styles.jsx';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts)

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
};

export default Posts;