const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  location: String,
  location_long: String,
  price: Number,
  type:  String,
  main_img: String,
  block: {
    type: Number,
    enum: [1,2,3,4,5,6,7,8,9,10,11,12,13]
  },
  building: String,
  number_of_rooms: Number,
  description: String,
  images: [String]
}, {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

HouseSchema.virtual('thumbnail').get( function() {
  return `${process.env.LOCATION}/files/${this.main_img}`;
});

const House = mongoose.model('House', HouseSchema);

module.exports = House;