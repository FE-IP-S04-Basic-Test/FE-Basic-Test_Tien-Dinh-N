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

  Output: { id: '1', quantity: 7 }, { id: '3', quantity: 5 }
*/

const findProduct = (cartArray1, cartArray2) => {
  // const result = cartArray1.filter((item1) => {
  //   return !cartArray2.some((item2) => {
  //     return item1.id === item2.id;
  //   });
  // });
  // console.log(result);
  const mergeArray = [...cartArray1, ...cartArray2];
  const sortedArray = mergeArray.sort((a, b) => {
    return a.id - b.id;
  });

  const idArray1 = cartArray1.map((item) => {
    return item.id;
  });

  const idArray2 = cartArray2.map((item) => {
    return item.id;
  });

  const sameIdArray = idArray1.filter((item) => {
    idArray2.includes(item);
  });

  console.log(sameIdArray);

  const obj = {};
  mergeArray.forEach((item) => {
    if (obj[item.id]) {
      obj[item.id] += item.quantity;
    } else {
      obj[item.id] = item.quantity;
    }
  });

  // cartArray2.forEach((item) => {
  //   if (obj[item.id]) {
  //     obj[item.id] += item.quantity;
  //   } else {
  //     obj[item.id] = item.quantity;
  //   }
  // });
  // console.log(obj);
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
