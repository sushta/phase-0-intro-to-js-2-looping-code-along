// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names =["Guadalupe", "Ollie", "Aki"];



function writeCards() {
  const messages = [];
  for (let i = 0; i <names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message);
  }
  return messages;
  
}

function countDown() {
for (let countdown = 0; countdown < 11; countdown++) {
  console.log(countdown);
}
}