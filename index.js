const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


const titleCased = () => {
  return tutorials.map(tutorial => {const sentence = tutorial.split(' ').map((word)=>word[0].toUpperCase() + word.slice(1))
  return sentence.join(' ');
})}


// function titledCased(){
//   return tutorials.map(tutorial => {const sentence = tutorial.split(' ').map((word)=>word[0].toUpperCase() + word.slice(1))
//   return sentence;
// })}

console.log(titledCased);
// const arrJoined = tutorials.join(" ");
// const strSplit = arrJoined.split(" ");

// function capitalize (element){
//     let singleC = element.map(elem => elem[0].toUpperCase() + elem.substring(1));
//     return [singleC.join(" ")];
//   }

// console.log(arrJoined);
// console.log(strSplit);
// console.log(capitalize(strSplit));

// const titleCased = () => {
  //   let big = tutorials.mapp(arr.toLowerCase().split(',').map(elem => {
  //       return elem[0].toUpperCase()+elem.slice(1)
  //     }))
  //     return big.join(" ");
  //   }

// function makeSmallArray (arr,size){
//   const smallArr = [];
//   while (arr.length>0){
//     const single = arr.splice(0,size);
//     smallArr.push(single);
//   }
//   return smallArr;
// }


// const changeToStrings = tutorials.toString(" ")
// const changeToWords = changeToStrings.split(" ");

// function capitalize (element){
//   let singleC = element.map(elem => elem[0].toUpperCase() + elem.substring(1));
//   return [singleC.join(" ")];
// }


// console.log(changeToStrings);
// console.log(changeToWords);
// console.log(capitalize(changeToWords));