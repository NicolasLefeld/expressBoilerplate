require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./db/dbConnection');

// Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

// Routers
app.use('/example', require('./routers/example'));

mongodb.checkConection();

app.listen(process.env.PORT, () => {
  console.log(`🏁  Server on ${process.env.PORT}`);
});
