const router = require(`express`).Router();
const { Users } = require(`./models/users`);

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

router.post('/login', (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Username does not exist or is incorrect' });
            return;
        }
        const correctPassword = userData.checkPassword(req.body.password);

        if (!correctPassword) {
            res.status(400).json({ message: 'Password is incorrect' });
            return;
        }
        req.session.save(() => {

            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ user: userData, message: 'You have logged in to Bookit!' });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
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