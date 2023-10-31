// import app from '../src/app';

// export default app;
import { Response, Request } from "express";

const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req: Request, res : Response) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});
