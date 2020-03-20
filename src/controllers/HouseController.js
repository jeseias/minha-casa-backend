const House = require('./../models/House');

exports.createHouse = async (req, res, next) => {
  const { location, location_long, price, tipo, norooms, description } = req.body;
  try {
    const housenames = req.files.map(file => file.filename);
    const house = await House.create({
      location,
      location_long,
      price,
      tipo,
      norooms,
      description,
      main_img: req.files[req.files.length - 1].filename,
      images: req.files.map(file => file.filename)
    }); 

    return res.status(201).json({
      result: housenames.length,
      house 
    });
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tente novamente',
    });
  }
}

exports.getHouse = async (req, res, next) => {
  try {
    const houses = await House.find({});
    houses.reverse();
    return res.status(200).json(houses);
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tente novamente',
    });
  }
}

exports.getOneHouse = async (req, res, next) => {
  try {
    const house = await House.findById(req.params.id);

    return res.status(302).json(house)
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tente novamente',
    });
  }
}

exports.eliminateHouse = async (req, res, next) => {
  try {
    await House.findByIdAndDelete(req.params.id);
    return res.status(200).json({ deleted: true })
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}