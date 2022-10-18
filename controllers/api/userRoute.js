const router = require(`express`).Router();
const { User } = require(`../../models`);

router.post('/', (req, res) => {
    Users.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json(userData)
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// login
router.post('/login', async (req, res) => {
  console.log('test');
  console.log(req.body);
  console.log(req.body.username);
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      console.log(userData);
      if (!userData) {
        console.log('user error')
        res
          .status(400)
          .json({ message: 'user' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        console.log('pass error');
        res
          .status(400)
          .json({ message: 'pass' });
        return;
      }
  console.log('test 3');
      req.session.save(() => {
        req.session.logged_in = true;
        // saves the user_id which can be used to load up the dashboard later
        req.session.user_id = userData.id;
        
        res.json({ user: userData, message: 'You are now logged in!' });
        console.log(req.session);
      });
  
    } catch (err) {
      console.log('catch err');
      res.status(400).json(err);
    }
  });

router.post('/logout', (req, res) => {
    if (req.session.LoggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;