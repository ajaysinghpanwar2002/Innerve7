const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require('./models')

// Routers 
const userRouter = require('./routes/User')
app.use ("/users",userRouter);

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});
