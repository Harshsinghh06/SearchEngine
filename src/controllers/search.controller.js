const catalogService = require("../services/catalog.service");
const rankingService = require("../services/ranking.service");
const queryParser = require("../utils/queryParser");

exports.searchProducts = (req, res) => {
  const query = req.query.query || "";
  const intent = queryParser.parseQuery(query);

  const products = catalogService.getAllProducts();
  const ranked = rankingService.rankProducts(products, intent);

  res.json({ data: ranked });
};
