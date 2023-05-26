const User = require('../models/userModel');

exports.createUser = (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password
  });

  user.save((err, savedUser) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(savedUser);
    }
  });
};
