// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const teesRouter = require('./tees.js');
const favesRouter = require('./faves.js');
const reviewsRouter = require('./reviews.js');
const {restoreUser } = require('../../utils/auth.js');


router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/tees', teesRouter);
router.use('/faves', favesRouter);
router.use('/reviews', reviewsRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });



module.exports = router;
