import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.route.js';

const app = express();
const PASSOWORD = 'hOC0SLb4fqk06Qww';

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = `mongodb+srv://Memories-001:${PASSOWORD}@memories.rjliq11.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL, { 
        useNewUrlParser: true, 
        // useUnifiedTology: true // Error: option useunifiedtology is not supported
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);