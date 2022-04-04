/*
*
8 Must Know JavaScript Array Methods
https://www.youtube.com/watch?v=R8rmfD9Y5-c
*
*
*/



const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 1000 },
    { name: 'Book', price: 200 },
    { name: 'Macbook', price: 3999 },
    { name: 'Phone', price: 1220 },
    { name: 'Keyboard', price: 500 },
    { name: 'Car', price: 50000 },
];

const filteredItem = items.filter((item) => {
    return item.price <=500 ;
});
console.log("1# Filter ::", filteredItem, "\n");
// 1# filter :: [
//     { name: 'Bike', price: 100 },
//     { name: 'Book', price: 200 },
//     { name: 'Keyboard', price: 500 }
//   ]



const mapItem = items.map((item) => {
    return item.name  ;
});
console.log("2# MapItem ::", mapItem, "\n");
// 2# mapItem :: [
//     'Bike',  'TV',
//     'Book',  'Macbook',
//     'Phone', 'Keyboard',
//     'Car'
//   ]


const foundItem = items.find((item) => {
    return item.name === 'Macbook' ;
});
console.log("3# MapItem ::", foundItem, "\n");
// 3# mapItem :: { name: 'Macbook', price: 3999 }




items.forEach((item)=>{
    console.log("4# ", item.name,);
});
// 4#  Bike
// 4#  TV
// 4#  Book
// 4#  Macbook
// 4#  Phone
// 4#  Keyboard
// 4#  Car
console.log("\n")



const hasSomeExpensiveItems = items.some((item) =>{
    return item.price <= 100
});

console.log("5# Some ::", hasSomeExpensiveItems, "\n");
// 5# some :: true 
// explain => is this any value in items[] has a price <= 100 ?  



const hasEveryExpensiveItems = items.every((item) =>{
    return item.price <= 100
});

console.log("6# Every ::", hasEveryExpensiveItems, "\n");
// 5# some :: true 
// explain => is this every value in items[] has a price <= 100 ?  





const startTotal = 0
const total = items.reduce((currentTotal, item)=>{
    console.log(`${currentTotal} + ${item.price}`);
    return item.price + currentTotal;
}, startTotal)
console.log("7# Total ::", total, "\n");

// 0 + 100
// 100 + 1000
// 1100 + 200
// 1300 + 3999
// 5299 + 1220
// 6519 + 500
// 7019 + 50000
// 7# total :: 57019


const arrItem = [1, 2, 3, 4, 5];
const includeTwo = arrItem.includes(2);
console.log("8# Include", includeTwo);
// 8# Include true