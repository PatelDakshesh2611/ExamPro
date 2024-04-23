const Signupmodel = require('../Models/signupmodel');
const bcrypt = require('bcrypt');

const LoginController = async (req, res) => {
  try {
    const user = await Signupmodel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(200).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (passwordMatch) {
     
      res.status(200).json({ message: 'Login successful', user: user });
    } else {
     
      res.status(200).json({ message: 'Invalid password' });
    }
  } catch (error) {
  
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = LoginController;
