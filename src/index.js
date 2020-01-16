const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-1eqdu.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Omnistack' });
});

app.listen(3333);
