require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527');
    expect(jest.fn()).toHaveBeenCalled();
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint do mercado livre', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    await expect(fetch).toHaveBeenCalledWith(url)
  })
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    await expect(fetchItem('MLB1615760527')).toEqual(item);
  })
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem', async () => {
    await expect(fetchItem()).toThrow(new Error('You must provide an url'));
   })
});
