const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado;', () => {
    expect(getSavedCartItems()).toHaveBeenCalled(localStorage.getItem)
  })
  it('Teste' , () => {
    expect(getSavedCartItems('cartItem')).toHaveBeenCalledWith(localStorage.setItem('cartItems'))
  })
});
