const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  try {
    const { userId, productList, total } = req.body;
    const order = await Order.create({ userId, productList, total });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching order' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};
