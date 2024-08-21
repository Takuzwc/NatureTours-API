const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

//console.log(process.env);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connection to local database was successful'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour name is required'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.3,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  //Other fields
});
const tour = mongoose.model('Tour', tourSchema);

const port = process.env.Port || 8000;
app.listen(port, () => {
  console.log(`Application is running on port: ${port}`);
});
