const reducers = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
            break;
        case 'CREATE':
            return posts;
            break;
        default:
            return posts;
    }
};

export default reducers;