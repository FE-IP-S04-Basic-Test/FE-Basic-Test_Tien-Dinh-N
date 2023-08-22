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

const findProduct = (arr1, arr2) => {
  const map = arr1.reduce((mapObj, curr) => {
    console.log(mapObj);
    if (mapObj[curr.id]) {
      mapObj[curr.id] += curr.quantity;
    } else {
      mapObj[curr.id] = curr.quantity;
    }
    return mapObj;
  }, {});
  return Object.values(
    arr2.reduce((mapObj, curr) => {
      if (map[curr.id]) {
        if (mapObj[curr.id]) {
          mapObj[curr.id].quantity += curr.quantity;
        } else {
          mapObj[curr.id] = {
            id: curr.id,
            quantity: map[curr.id] + curr.quantity,
          };
        }
      }
      return mapObj;
    }, {})
  );
};

console.log(
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
  )
);
