exports.parseQuery = (query) => {
  query = query.toLowerCase();

  return {
    wantsCheap: query.includes("sasta") || query.includes("cheap"),
    wantsLatest: query.includes("latest"),
    color: query.includes("red") ? "red" : null,
    storage: query.includes("256") ? "256gb" : null,
    maxPrice: query.match(/\d+k/) ? parseInt(query) * 1000 : null
  };
};
