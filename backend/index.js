import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoutes.js';


const app = express();

//CORS Policy
//app.use(cors());

//app.use(
    //cors({
       // origin: 'http://localhost:3000',
       // methods: ['GET','POST','PUT','DELETE'],
       // allowedHeaders: ['Contet-Type'],
//}));


app.use(express.json());

app.get('/', (request, Response) => {
    console.log(request)
    return Response.status(234).send('welcome to MERN Stack Tutorial')
});

app.use('books', bookRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });
