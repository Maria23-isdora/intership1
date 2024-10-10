let h1 = document.querySelector("#clockTimer");

function getTime() {
  let myDat = new Date();

   console.log(myDat);

  let hours = myDat.getHours();
  let minutes = myDat.getMinutes();
  let seconds = myDat.getSeconds();

  let time = ${hours} : ${minutes} : ${seconds};

  h1.textContent = ${time};
}