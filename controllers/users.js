module.exports = function(_, passport) {
  return {
    SetRouting: function(router) {
      router.get('/', this.indexPage);
      router.get('/signup', this.getSignUp);
      router.post('/signup', this.postSignUp);
      router.get('/home', this.homePage);
    },

    indexPage: function(req, res) {
      return res.render('index');
    },

    getSignUp: function(req, res) {
      return res.render('signup');
    },

    postSignUp: passport.authenticate('local.signup', {
      successRedirect: '/home',
      failureRedirect: '/signup',
      failFlash: true
    }),

    homePage: function(req, res) {
      return res.render('home');
    }
  };
};
