/* jshint node:true */
module.exports = {
  port: 3000,
  couch: {
    host: 'localhost',
    port: 5984,
    db: {
      users: 'users'
    }
  },
  sessOptions: {
    key: 'angular-app.sid',
    secret: 'my secret'
  }
};
