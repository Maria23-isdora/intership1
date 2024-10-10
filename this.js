// {
//     const myobj={
//         name: "pats",
//         age: 20,
//         college: "st.anne's",
//         myMethod:function(){
//             return this.name
//         }
//     }
//     console.log(myobj.myMethod());
    
// };

// let names =["beni","pats","kee","pavi"]

// const [ a1, ,a3]=names;


// console.log(a3);

// let myname={
//     name: "kee",
//     age: 20,
//     college: "mangas"
// }
 
// const {name,college} =myname;

// console.log(college);

// var randomnum = Math.random() *532;
// //  let round=2.3
// var roundval = Math.round(randomnum);

// console.log(randomnum);
//  console.log(roundval);

//  let mynum=3.5

// let ceil=Math.ceil(mynum);

// console.log(ceil);


// let fl =Math.floor(mynum);
// console.log(fl);


// let h1 = document.querySelector("#clockTimer");

// function getTime() {
//   let myDat = new Date();

//   // console.log(myDat);

//   let hours = myDat.getHours();
//   let minutes = myDat.getMinutes();
//   let seconds = myDat.getSeconds();

//   let time = ${hours} : ${minutes} : ${seconds};

//   h1.textContent = ${time};
// }

// async function MyFunc() {
//     let fetchedData = await fetch("https://jsonplaceholder.typicode.com/users");
//     let userData = await fetchedData.json();
  
//     console.log(userData);
  
//     userData.map((user) => {
//       let p = document.createElement("p");
//       console.log(user.name);
//       p.textContent = user.name;
  
//       document.body.append(p);
//     });
//   }
  
//   MyFunc();

// async function mydata() {

//     let fetchedData =await fetch("https://jsonplaceholder.typicode.com/users");
//     let user =await fetchedData.json();

//     console.log(user);

//     user.map((user)=>{
//         let p = document.createElement("p");
//         console.log(user.email);
//         p.textContent = user.email;

//         document.body.append(p);
//     });
    
    
// }

// mydata();


  git config --global user.email "maria23isdora@gmail.com"
  git config --global user.name "Maria23-isdora"