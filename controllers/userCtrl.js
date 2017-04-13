var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res, next) {
    console.log(req.body);
    req.session.currentUser = users.filter( v =>  v.name === req.body.name ).filter( v => v.password === req.body.password)
    if (!req.session.currentUser.length) {
      res.status(401).send({ userFound: false })
    } else {
      res.status(200).send({ userFound: true })
    }
  }
}
