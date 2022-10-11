const fetchProducts = async ($QUERY) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data;
  return results;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
