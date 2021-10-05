const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email: email }) ){      
      return res.status(400).send({ error: 'Email already register!'});
    }    
    const user = await User.create(req.body);
    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Registration failed!'});
  }
});

router.get('/users', async (req, res) => {
  try {    
    
    const users = await User.find();
    users.password = undefined;

    return res.send({ users });

  } catch (err) {
    return res.status(400).send({ error: 'Ops!'})  ;  
  }


});

module.exports = app => app.use('/auth', router);