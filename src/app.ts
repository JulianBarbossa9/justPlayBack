//Root file

import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { db } from './config/index';


const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());


app.use(router);
db.$connect().then(() => {  
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}).catch((error) => { 
  console.error(error);
  process.exit(1);
})

export default app;



