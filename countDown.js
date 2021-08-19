//call back hell() 


// setTimeout(()=>{
//     console.log("3");
//     setTimeout(()=>{
//         console.log("2");
//         setTimeout(()=>{
//             console.log("1");
//             setTimeout(()=>{
//                 console.log("Happy Welcome");
//             },1000)
//         },1000)
//     },1000)
// },1000)



//solving callbackHell() using promise ();

const newYear = (num) =>
  new Promise((resolve, reject) => {
    if (num > 0) {
      setTimeout(() => {
        console.log(num);
        resolve(num);
      }, 1000);
    } else {
      reject("countdown Done");
    }
  });
newYear(3)
  .then((x) => newYear(--x))
  .then((x) => newYear(--x))
  .then((x) => newYear(--x))
  .catch((stopCountDown) => console.log(stopCountDown));   //count down done.
