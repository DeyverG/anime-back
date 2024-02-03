import express from 'express';
import router from './anime/anime.route';
require('dotenv').config();

const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});