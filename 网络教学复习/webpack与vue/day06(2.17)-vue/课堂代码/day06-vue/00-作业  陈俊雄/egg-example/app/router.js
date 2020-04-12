'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
 
  router.get('/login', controller.admin.login);
  router.get('/getdata', controller.admin.getdata);
  router.get('/add', controller.admin.add);
  router.get('/del', controller.admin.del);
  router.get('/updata', controller.admin.updata);
  router.get('/select', controller.admin.select);
};