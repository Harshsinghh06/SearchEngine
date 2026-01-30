const catalog = require("../data/catalog");

exports.addProduct = (product) => {
  return catalog.addProduct(product);
};

exports.updateMetadata = (productId, metadata) => {
  return catalog.updateMetadata(productId, metadata);
};

exports.getAllProducts = () => {
  return catalog.getAllProducts();
};
