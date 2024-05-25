const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const product = await Product.create({ name, description, price, imageUrl });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update({ name, description, price, imageUrl });
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
};
