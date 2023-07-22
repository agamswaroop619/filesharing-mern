import express from 'express';
import router from './routes/routes.js';
const app = express();
const PORT = 8000;

app.use('/',router);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
