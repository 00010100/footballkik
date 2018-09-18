module.exports = function(_, passport, User) {
  return {
    SetRouting: function(router) {
      router.get('/', this.indexPage);
      router.get('/signup', this.getSignUp);
      router.post('/signup', User.SignUpValidation, this.postSignUp);
      router.get('/home', this.homePage);
    },

    indexPage: function(req, res) {
      return res.render('index');
    },

    getSignUp: function(req, res) {
      const errors = req.flash('error');

      return res.render('signup', {
        title: 'Footballkik | Login',
        messages: errors,
        hasErrors: errors.length > 0,
      });
    },

    postSignUp: passport.authenticate('local.signup', {
      successRedirect: '/home',
      failureRedirect: '/signup',
      failFlash: true,
    }),

    homePage: function(req, res) {
      return res.render('home');
    },
  };
};
