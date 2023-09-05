let generatorBased = document.querySelector('#generatorbased');
let deviceBased = document.querySelector('#devicebased');
let generatorBasedcontent = document.querySelector('#generatorbasedcontent');
let deviceBasedcontent = document.querySelector('#devicebasedcontent');
let fuelCost = document.querySelector('#fuelcost');
let fuelType = document.querySelector('#fueltype');
let petrol = document.querySelector('#petrol');
let diesel = document.querySelector('#diesel');
let percentageLoading = document.querySelector('#percentageloading');




percentageLoading.style.display = 'none';

deviceBased.addEventListener('click', (e) => {
    generatorBasedcontent.style.display = 'none';
    deviceBasedcontent.style.display = 'flex';
});

generatorBased.addEventListener('click', (e) => {
    generatorBasedcontent.style.display = 'flex';
    deviceBasedcontent.style.display = 'none';
});

fuelType.addEventListener('change', (e) => {
  if (fuelType.value === 'petrol') {
    percentageLoading.style.display = 'none';
    fuelCost.innerHTML = `NGN 164 / Litre `;
    once: true;
  } else if (fuelType.value === 'diesel') {
    percentageLoading.style.display = 'block';
    fuelCost.innerHTML = `NGN 226 / Litre `;
  }
});


// e.stopPropagation();
// if (fuelType.value == 'petrol') {
//     percentageLoading.style.display = 'none';
//     fuelCost.innerHTML += `NGN 164 / Litre `;
// }  else if (fuelType.value == 'diesel') {
//     percentageLoading.style.display = 'block';
//     fuelCost.innerHTML += `NGN 226 / Litre `;
// };



// if (fuelType.value == 'petrol') {
//     fuelCost.innerHTML += `NGN 164 / Litre `;
// }  else if (fuelType.value == 'diesel') {
//     fuelCost.innerHTML += `NGN 226 / Litre `;
// };

// e.stopPropagation();
// switch (fuelType.value) {
//  case 'petrol':
//      percentageLoading.style.display = 'none';
//      fuelCost.innerHTML += `NGN 164 / Litre `;
     
//      break;

//  case 'diesel':
//      percentageLoading.style.display = 'block';
//      fuelCost.innerHTML += `NGN 226 / Litre `;
     
//      break;

//  default:
//      break;
// }