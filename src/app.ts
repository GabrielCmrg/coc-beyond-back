import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { errorMiddleware } from './middlewares';

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(errorMiddleware.errorHandler);

export default app;
