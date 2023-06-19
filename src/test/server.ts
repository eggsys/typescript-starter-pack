const testObj = [
  {
    merchantId: 1,
    merchantName: "eggShop",
    order: [
      {
        productName: "pen",
        productId: "x01",
        value: 10,
        quality: 17,
      },
      {
        productName: "razor",
        productId: "x02",
        value: 18,
        quality: 2,
      },
    ],
  },
  {
    merchantId: 2,
    merchantName: "ekkShop",
    order: [
      {
        productName: "pencil",
        productId: "x01",
        value: 10,
        quality: 17,
      },
      {
        productName: "box",
        productId: "x02",
        value: 18,
        quality: 2,
      },
    ],
  },
];

let newobj;
let newArr = [];
const test = testObj.map((merch, index) => {
  console.debug("Merch", index);
//   console.debug(merch);
  return merch.order.map((order, index) => {
    console.debug("order", index);
    // console.debug(order);
    newArr.push( {
        merchantId: merch.merchantId,
        merchantName: merch.merchantName,
        productName: order.productName,
        productId: order.productId,
        value: order.value,
        quality: order.quality
    })
  });
});

console.debug("result\n", newArr);

// const test = testObj.order.map((value) => {
//   console.log(value);
// });

// console.log(test);
