import 'dotenv/config';
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';
import { errorHandler as bodyErrorHandler } from 'bodymen';

export const createExpressApp = (apiRoutes) => {
  const app = express();

  app.use(morgan('tiny'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/', apiRoutes);
  app.use(bodyErrorHandler());

  return app;
};

const expressApp = createExpressApp(routes);
const server = http.createServer(expressApp);

setImmediate(() => {
  server.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});

export default expressApp;
