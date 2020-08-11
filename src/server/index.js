const path = require('path')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./../app');

dotenv.config({
  path: path.resolve(__dirname, '..', '.config.env')
});

mongoose.connect(
  process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(console.log('Database connection successfull'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));