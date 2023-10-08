module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/octocats', require('./routes/octocats.route'));

};
