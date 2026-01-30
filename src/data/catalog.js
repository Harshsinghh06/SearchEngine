let catalog = [];
let productIdCounter = 100;

function addProduct(product) {
  product.productId = ++productIdCounter;
  product.metadata = {};
  catalog.push(product);
  return product;
}

function updateMetadata(productId, metadata) {
  const product = catalog.find(p => p.productId === productId);
  if (!product) return null;
  product.metadata = { ...product.metadata, ...metadata };
  return product;
}

function getAllProducts() {
  return catalog;
}

module.exports = {
  addProduct,
  updateMetadata,
  getAllProducts
};
