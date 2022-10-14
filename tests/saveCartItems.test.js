const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado;', () => {
    expect(saveCartItems('cartItem')).toHaveBeenCalled(localStorage.setItem)
  })
  it('Teste' , () => {
    expect(saveCartItems('cartItem')).toHaveBeenCalledWith(localStorage.setItem('cartItems', 'cartItem'))
  })
});
