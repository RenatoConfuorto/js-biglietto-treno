//elementi del DOM
const distanceDisplay = document.getElementById('distance');
const ageDisplay = document.getElementById('age');
const ageDiscountDisplay = document.getElementById('age-discount');
const priceDisplay = document.getElementById('final-price');

//console.log(distanceDisplay, ageDiscountDisplay, ageDisplay, priceDisplay);

//chiedere i dati all'utente
const distance = parseInt(prompt('Inserire la distanza da percorrere(Km)'));
distanceDisplay.innerHTML = distance + ' Km';
console.log(distance, typeof(distance));

const age = parseInt(prompt('Inserire la propria età'));
ageDisplay.innerHTML = age;
console.log(age, typeof(age));

//calcolare il prezzo pieno
const fullPrice = distance * 0.21;
console.log(fullPrice);

//controllare se si può applicare lo sconto
let discount;
let discountPrice;

if(age < 18){
  discount = 20;
  discountPrice = fullPrice - ((fullPrice * discount) / 100);
  ageDiscountDisplay.innerHTML = discount + '%';
  console.log(discountPrice);
}else if(age > 65){
  discount = 40;
  discountPrice = fullPrice - ((fullPrice * discount) / 100);
  ageDiscountDisplay.innerHTML = discount + '%';
  console.log(discountPrice);
}else{
  discount =0;
  discountPrice = fullPrice
  ageDiscountDisplay.innerHTML = discount + '%';
  console.log(discountPrice);
}

//arrotondare il prezzo
const finalPrice = discountPrice.toFixed(2);
priceDisplay.innerHTML = '€' + finalPrice;
