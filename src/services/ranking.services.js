exports.rankProducts = (products, intent) => {
  return products.map(product => {
    let score = 0;

    // Rating importance
    score += product.rating * 10;

    // Stock availability
    if (product.stock > 0) score += 20;

    // Cheap intent
    if (intent.wantsCheap) {
      score += Math.max(0, (100000 - product.price) / 1000);
    }

    // Latest intent
    if (intent.wantsLatest && product.title.includes("17")) {
      score += 30;
    }

    // Metadata matching
    if (intent.color && product.description.includes(intent.color)) {
      score += 10;
    }

    if (intent.storage && product.description.includes(intent.storage)) {
      score += 10;
    }

    return { ...product, score };
  })
  .sort((a, b) => b.score - a.score);
};
