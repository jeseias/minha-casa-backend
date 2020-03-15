const bcrypt = require('bcryptjs');

const User = require('./../models/User');

exports.login = async (req, res, next) => {
  const { telefone, password } = req.body;
  try {
    if(!telefone && !password) return false;

    const user = await User.findOne({ telefone });

    if(!user || !await user.correntPassword(password, user.password)) {
      return res.status(500).json({
        err: 'O seu numero de telefone ou senha esta incorrecto'
      });
    };

    user.password = undefined;
    user.__v = undefined;

    return res.status(203).json({
      res: true,
      user
    });
  } catch (err) {
    return res.status(500).json({
      err: err.msg
    });
  }
}