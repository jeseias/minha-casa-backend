const Contact = require('./../models/Contact');

exports.newMessage = async (req, res, next) => {
  try {
    await Contact.create(req.body);

    return res.status(201).json({
      status: 'success'
    });
  } catch (err) {
    return res.status(201).json({
      status: 'fail',
      err: 'Houve um erro tente novamente'
    });
  }
}

exports.getAllMessage = async (req, res, next) => {
  try {
    const messages = await Contact.find({});

    return res.status(302).json({
      results: messages.length,
      messages
    });
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}

exports.getOneMessage = async (req, res, next) => {
  try {
    const message = await Contact.findById(req.params.id);

    return res.status(302).json(message)
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tente novamente',
    });
  }
}

exports.alreadyRead = async (req, res, next) => {
  try {
    const message = await Contact.findByIdAndUpdate(req.params.id, req.body);
    
    console.log(message)
    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}

exports.eliminateMessage = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    return res.status(200).json({ deleted: true })
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}