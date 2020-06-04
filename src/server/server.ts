import express from 'express';
import cors from 'cors';
import low from 'lowdb';
import { v4 as uuid } from 'uuid';
import FileSync from 'lowdb/adapters/FileSync';
import {
  TodoItem, getAllEndpoint, createEndpoint, setAllEndpoint, CreateRequest, CreateResponse, SetAllRequest
} from '../common/types';

/** 
 * Setup db
 */
type DBSchema = {
  items: TodoItem[]
}
const adapter = new FileSync<DBSchema>('db.json', {
  defaultValue: {
    items: []
  }
});
const db = low(adapter);

/** 
 * API server 
 */
const app = express();
const api = express.Router();

api.use(cors(), express.json());
api.get(getAllEndpoint, (_, res) => {
  res.send({ todos: db.get('items') });
});
api.post(createEndpoint, (req, res: express.Response) => {
  const id = uuid();
  const request: CreateRequest = req.body;
  db.get('items')
    .push({
      id: id,
      completed: false,
      message: request.message
    })
    .write();
  res.send({ id });
});
api.put(setAllEndpoint, (req, res: express.Response) => {
  const request: SetAllRequest = req.body;
  db.set('items', request.todos)
    .write();
  res.send({});
});

app.use('/api', api);

/** Start */
const port = 8000;
app.listen(port, '0.0.0.0', () => {
  console.log('Server listening on port:', port);
});
