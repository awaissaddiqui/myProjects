const data = [
    {
        name: "Laptop",
        price: 1000,
        isAvailable: true
    }, 
    {
        name: "Mobile",
        price: 8000,
        isAvailable: true
    },
    {
        name: "TV",
        price: 9000,
        isAvailable: true
    }
];

for(let i = 0; i< data.length; i++) {
    console.log(data[i].name)      //nodemon (file name)
}
var sum = 0
for (let i = 0; i < data.length; i++) {
    if(data[i].isAvailable) {
        sum = sum+data[i].price
        console.log(data[i].price)
    }
    console.log(sum)
    
}
var sale;
for (let i = 0; i < data.length; i++) {
    if(data[i].isAvailable) {
      sale = data[i].price - (20*data[i].price/100);  //bracket pair colorize (extension)
      data[i].price = sale;
    }
}
    console.log(data[i].price)