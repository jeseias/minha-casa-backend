const fs = require('fs');
const path = require('path');
const House = require('./../models/House');

exports.createHouse = async (req, res, next) => {
  const { price, type, number_of_rooms, description, block, building } =
    req.body;
  try {
    const housenames = req.files.map((file) => file.filename);
    const house = await House.create({
      block,
      building,
      price,
      type,
      number_of_rooms,
      description,
      main_img: req.files[0].filename,
      images: req.files.map((file) => file.filename),
    });

    return res.status(201).json({
      result: housenames.length,
      house,
    });
  } catch (err) {
    return res.status(500).json({
      err: "Houve um erro tente novamente",
    });
  }
}

exports.getHouse = async (req, res, next) => {
  let limitItems;
  try {
    const houses = await House.find({});
    houses.reverse()

    console.log(houses[0]);
    
    req.query.items >= houses.length ? limitItems = true : limitItems = false;
    req.query.items ? houses.splice(req.query.items) : houses;
    return res.status(200).json({
      limitItems,
      houses
    });
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
    const house = await House.findByIdAndDelete(req.params.id);

    house.images.forEach(img => {
      fs.unlinkSync(path.resolve(__dirname, '..', '..', 'uploads', `${img}`), err => {
        if (err) throw err;
      });
    });
    return res.status(200).json({ deleted: true });
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}

