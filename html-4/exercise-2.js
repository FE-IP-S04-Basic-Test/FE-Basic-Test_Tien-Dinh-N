/* 
  [
    { id: '1', quantity: 2 },
    { id: '2', quantity: 2 },
    { id: '3', quantity: 3 },
    { id: '1', quantity: 3 }
  ],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 }
  ]);
*/

const findProduct = (cartArray1, cartArray2) => {
  const result = cartArray1.filter((item1) => {
    return !cartArray2.some((item2) => {
      return item1.id === item2.id;
    });
  });
  console.log(result);
};

findProduct(
  [
    { id: '1', quantity: 2 },
    { id: '2', quantity: 2 },
    { id: '3', quantity: 3 },
    { id: '1', quantity: 3 },
  ],
  [
    { id: '1', quantity: 2 },
    { id: '3', quantity: 2 },
  ]
);
