const products = [
  {
    id: 1,
    name: 'Trà sữa truyền thống',
    price: 30000,
  },
  {
    id: 2,
    name: 'Trà sữa Thái xanh',
    price: 32000,
  },
  {
    id: 3,
    name: 'Trà sữa đặc biệt',
    price: 40000,
  },
];

const sugars = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const ices = [
  {
    id: 1,
    amount: 0,
    label: '0%',
  },
  {
    id: 2,
    amount: 50,
    label: '50%',
  },
  {
    id: 3,
    amount: 100,
    label: '100%',
  },
];

const addToCart = (productData) => {
  const cartStorage = JSON.parse(localStorage.getItem('product')) || [];
  const existedProduct = cartStorage.find((product) => {
    return product.id === productData.id;
  });
  if (existedProduct) {
    existedProduct.quantity += 1;
  } else {
    cartStorage.push({
      ...productData,
    });
  }
  localStorage.setItem('product', JSON.stringify(cartStorage));
  console.log(cartStorage);
};

const data = {
  id: 1,
  product: products[0],
  ices: ices[1],
  sugars: sugars[2],
  quantity: 1,
};

addToCart(data);
