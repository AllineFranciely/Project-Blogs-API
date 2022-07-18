const express = require('express');

const routes = require('./routes');

const error = require('./middlewares/erroMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', routes.loginRouter);

app.use('/user', routes.userRouter);

app.use('/categories', routes.categoryRouter);

app.use('/post', routes.postRouter);

app.use(error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
