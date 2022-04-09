const data = [
    {
        name: "Laptop",
        price: 1000,
        isAvailable: true
    }, 
    {
        name: "Mobile",
        price: 8000,           //randomuser.me/portrait/men
        isAvailable: true                      //JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)                              
        
    },
    {
        name: "TV",
        price: 9000,
        isAvailable: true
    }
];

/*for(let i = 0; i< data.length; i++) {
    console.log(data[i].name)      //nodemon (file name)
}
var sum = 0
for (let i = 0; i < data.length; i++) {
    if(data[i].isAvailable) {
        sum = sum+data[i].price
        console.log(data[i].price)
    }
    console.log(sum)*/
                                        //par
                                        for Application Programming Interface
}
var sale;
for (let i = 0; i < data.length; i++) {
    if(data[i].isAvailable) {
      sale = data[i].price - (20*data[i].price/100);  //bracket pair colorize (extension)
      data[i].price = sale;
    }
}
    console.log(data[i].price)


    