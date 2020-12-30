import { Router } from 'express';

const routes = new Router();

routes.get('/', (require, response) =>
  response.json({ message: 'Hello World, from Noseless' })
);

export default routes;
