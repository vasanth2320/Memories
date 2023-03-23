import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dontenv from 'dotenv';

import postRoutes from './routes/posts.route.js';
import userRoutes from './routes/users.route.js';

const app = express();
dontenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

mongoose.connect(MONGODB_URL, { 
        useNewUrlParser: true, 
        // useUnifiedTology: true // Error: option useunifiedtology is not supported
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);