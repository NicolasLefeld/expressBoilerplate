const router = require('express').Router();
const {
  exampleController
} = require('./controller');

/*router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});*/

router

  .get('/list', async (req, res) => {
    const { status, body } = await exampleController();

    res.status(status).json(body);
  })

  .post('/', async (req, res) => {
    const { status, body } = await exampleController();

    res.status(status).json(body);
  })

  .put('/', async (req, res) => {
    const { status, body } = await exampleController();

    res.status(status).json(body);
  })


  .delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { status, body } = await exampleController();

    res.status(status).json(body);
  });

module.exports = router;
