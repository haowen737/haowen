var router = require('koa-router')();
var user = require('../../controllers/user');

router.get('/get/:id', user.getUser);
router.post('/registerUser', user.registerUser);
router.post('/login', user.login);
router.post('/update', user.update);

module.exports = router;
