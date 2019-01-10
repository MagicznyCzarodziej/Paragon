import express from 'express';
import cors from 'cors';
import handleRoutes from './routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

handleRoutes(app);

app.listen(4000);
