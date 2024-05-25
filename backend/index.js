const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

const productRoutes = require('./app/routes/productRoutes');
const userRoutes = require('./app/routes/userRoutes');
const orderRoutes = require('./app/routes/orderRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
