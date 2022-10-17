// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const products = fetchProducts('computador');

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const saveStorage = () => {
  const itemInCart = document.querySelectorAll('.cart__item');
  const push = [];
  for (let i = 0; i < itemInCart.length; i += 1) {
    push.push(itemInCart[i].outerHTML);
    saveCartItems(push);
  }
};
// console.log(getSavedCartItems());

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

 const clearItemCart = () => {
   const itemInCart = document.querySelectorAll('li.cart__item');
   for (let i = 0; i < itemInCart.length; i += 1) {
      itemInCart[i].addEventListener('click', (e) => {
        e.target.remove();
        saveStorage();
      });
      }
   };

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  return li;
};

const cartItemClickListener = () => {
  const btns = document.querySelectorAll('.item__add');
  const cart = document.getElementsByClassName('cart__items');
  const idItem = document.getElementsByClassName('item_id');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', async () => {
      const uniqueItem = await fetchItem(idItem[i].innerText);
      cart[0].appendChild(createCartItemElement(uniqueItem));
      saveStorage();
      clearItemCart();
    });
  });
};

const emptyCart = document.querySelector('.empty-cart');

const clearCart = () => {
  const itemInCart = document.querySelectorAll('li.cart__item');
  itemInCart.forEach((unique) => {
    unique.remove();
    saveStorage();
  });
};

const loadStorage = () => {
   const returnSave = getSavedCartItems();
   const cart = document.getElementsByClassName('cart__items');
    const li = document.createElement('li');
    cart[0].appendChild(li);
    li.outerHTML = returnSave;
    clearItemCart();
 };

emptyCart.addEventListener('click', clearCart);

const fusionItem = async () => {
  const item = document.getElementsByClassName('items');
  const respose = await products;
  respose.forEach((product) => item[0].appendChild(createProductItemElement(product)));
  cartItemClickListener();
 };

window.onload = () => {
  fusionItem();
   loadStorage();  
};
