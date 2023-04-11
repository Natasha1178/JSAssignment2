//Assignment#2

//Question#1
// function addFuction(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const addNumber1 = addFuction(20);
//   const addNumber2 = addFuction(10);
  
//   console.log(addNumber1(5)); 
//   console.log(addNumber2(20)); 

  //Question#2

//   let arrValue=5
//   function arrData(){
//   let arr = [2,3,5,7,9];
//   for (arr=0 ; arr<=arr.length;arr++){
//     if(arr === arrValue){
//     return true
//     console.log("true");
//   }
//      else{
//         console.log("false");
    
//     }
// }
// }
  
  //Question#3

  // Create element:
  // const para = document.createElement("p");
  // para.innerText = " And i will learn the javascipt"; 
  // // Append to body:
  // document.body.appendChild(para)

  //Question#4

  // var node = document.createElement('li');
  // node.appendChild(document.createTextNode('Physics'));
  // document.querySelector('ul').appendChild(node);

  //Question#5
  
  // const myPara = document.getElementById("myPara");
  // myPara.innerHTML="<b>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled PL with first-class functions</b>"
  // myPara.style.backgroundColor = "#000";
  // myPara.style.color = "#fff";
  // myPara.style.width = "100%";
  // myPara.style.padding="10em";
  // console.log(myPara);
  // setInterval(function () {
  //     let color1 = Math.floor(Math.random()*16777215).toString(16);
  //     // let color2 = Math.floor(Math.random()*16777215).toString(16);
  //     myPara.style.backgroundColor = "#" + color1;
  //     //  myPara.style.color = "#" + color2;
  //    }, 500);

  //Question#6
  
  // let prevStudents = localStorage.getItem("students"); // get from LocalStorage
  // let students = prevStudents ? JSON.parse(prevStudents) : [];
  // function provideStudent() {
  //   let std = {
  //     name: prompt("Enter Name"),
  //     rollNo: +prompt("Enter Roll no"),
  //     teacher: prompt("Enter Teachers Name"),
  //     className: prompt("Enter Your Class"),
  //   };
  //   students.push(std);
  //   console.log(students);
  // }
  // let stringify = JSON.stringify(students); // Convert it to String
  // localStorage.setItem("students", stringify); // Save it to LocalStorage

  