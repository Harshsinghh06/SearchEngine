const catalogService = require("../services/catalog.services");

exports.addProduct = (req, res) => {
  try {
    const product = catalogService.addProduct(req.body);
    res.status(201).json({ productId: product.productId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMetadata = (req, res) => {
  const { productId, Metadata } = req.body;
  const product = catalogService.updateMetadata(productId, Metadata);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({ productId, Metadata: product.metadata });
};
