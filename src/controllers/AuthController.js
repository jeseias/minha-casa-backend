const User = require('./../models/User');

exports.login = async (req, res, next) => {
  const { telefone, password } = req.body;
  try {
    if(!telefone && !password) return false;
    
    const user = await User.findOne({ telefone });

    if(!user || !await user.correctPassword(password, user.password)) {
      return res.status(404).json({
        res: 'O seu numero de telefone ou senha esta incorrecto'
      });
    };

    user.password = undefined;
    user.__v = undefined;

    return res.status(202).json({
      res: true 
    });
  } catch (err) {
    return res.status(404).json({
      err: err.msg
    });
  }
}