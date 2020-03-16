const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  location: String,
  location_long: String,
  price: Number,
  tipo:  String,
  main_img: String,
  norooms: Number,
  description: String,
  images: [String]
}, {
  toJSON: {
    virtuals: true,
  }
});

HouseSchema.virtual('thumbnail', function() {
  return `${process.env.LOCATION}/files/${this.main_img}`;
});

const House = mongoose.model('House', HouseSchema);

module.exports = House;