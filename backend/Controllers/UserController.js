const User = require('../Schema/User');


class UserController{
  async createUser(req, res){
    try {
      console.log(req);
      const user = new User(req.body);
      user.save().then(r => console.log(r));
      res.status(201).json({ message: 'User created', user});
    } catch(err) {res.status(500).json({ message: err.message });}
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email , password });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const token = user._id;
      res.json({ message: 'Login successful', token });
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = UserController;
