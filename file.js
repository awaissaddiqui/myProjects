// const data = [
//     {
//         name: "Laptop",
//         price: 1000,
//         isAvailable: true
//     }, 
//     {
//         name: "Mobile",
//         price: 8000,           //randomuser.me/portrait/men
//         isAvailable: true                      //JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)                              
        
//     },
//     {
//         name: "TV",
//         price: 9000,
//         isAvailable: true
//     }
// ];

/*for(let i = 0; i< data.length; i++) {
    console.log(data[i].name)     
                              //nodemon (file name)
}
var sum = 0
for (let i = 0; i < data.length; i++) {
    if(data[i].isAvailable) {
        sum = sum+data[i].price
        console.log(data[i].price)
    }
    console.log(sum)*/
                                        //parse
                        // API for Application Programming Interface
//}
// var sale;
// for (let i = 0; i < data.length; i++) {
//     if(data[i].isAvailable) {
//       sale = data[i].price - (20*data[i].price/100);  //bracket pair colorize (extension)
//       data[i].price = sale;
//     }
// }
//     console.log(data[i].price)



/*New work of Javascript*/

const marks = [45, 33, 20, 77, 80, 99, 12, 34, 56, 78,];
const add = [33, 44,]
// const sum = marks
//     .sort((a,b) => a - b)
//     .filter((n) => n >50)
//     .map((a) => a + 10)
//     .reduce((a,b) => a + b, 0);
   
   // const l = marks.indexOf(79)
 // ( marks.indexOf(45) == -1) ? marks.push(100) : marks.pop();
  
   //  console.log(sum)
    // const full = marks.concat(add);  //concat mean to add element of one aray to other with ends.
    // console.log(full)

    // list = []
    // list.fill(10,0,10)

    //Destructring 
          // desturcturing have two parts , one is objct destructuring and other is ary.
          // in aray desturctring we can't change indexes.
          

    // const names = ["khan" , "Awais", 
    // "Taheed", "Ali"];
    // const [name1,,name2] = names; 
    // console.log(name1)

    // const student_list = {
    //   name: 'Awais',
    //   age:23,
    //   marks: 30,
    //   isPass: true,
    //   friends:["khan" , "Awais", 
    //    "Taheed", "Ali"],
    //    address: {
    //      city: 'mardan',
    //      village: 'sarhad'
    //    }
    // }
    // const {name, address} = student_list;
    // console.log(address.city)

  //   changeMarks(student_list);

  //   const changeMarks = (marks, address) => {
  //   obj.marks = 50
  // }

      /*String */
   const str1 = "Hello";
   const str2 = " world ";
   //const str = "This is a new line.";
   //const str3 = str1.concat(str2)
  const str = "This is a new Pakistan";
   //const str3 = str1 + str2;
   //const str4 = $(str1) $(str2) ;
  // console.log(str3)

  const l = str.indexOf("line")
  //console.log(l)
const l2 = str.replace("new", "old");
//console.log(l2)
/*SLICE */
// The extraction of things from one place to anther  from string is slice.
//  const country = str.slice(str.indexOf("key"),str.indexOf(key) + key.length)
//  console.log(country)

// const string = "1, Faizan, mardan, 3.5, 6th, uet"

// const [id, name, address, gpa, semester, institue] = string.split(",") ;

// const name = "Faizan"
// const trim = name1.trim();
// console.log(trim)