const path = require('path')

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./../app');

dotenv.config({
  path: path.resolve(__dirname, '..', '.config.env')
});

mongoose.connect(
  process.env.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}).then(console.log('Database connectino successfull'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));