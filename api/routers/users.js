import Router from 'koa-router';
const router = new Router({ prefix: '/users' });
const { UserController } = cano.app.controllers;
const { Auth } = cano.app.policies;

router.post('/', Auth.apikey, UserController.create);
router.get('/hello', Auth.apikey, UserController.hello);
router.get('/', Auth.bearer, Auth.apikey, UserController.get);
router.get('/:id', Auth.bearer, Auth.apikey, UserController.getById);
router.put('/:id', Auth.bearer, Auth.apikey, UserController.updateById);
router.delete('/:id', Auth.bearer, Auth.apikey, UserController.deleteById);

module.exports = router;
