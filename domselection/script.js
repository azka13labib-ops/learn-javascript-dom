// DOM SELECTION
// document.getElemenById mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'green';
// judul.innerHTML = 'sandika galih';

// // document.GetElements.ByTagName() -> HTMlcollections
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'red';
// }

// // documentGetElementsByClassName () -> html collecttion
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';

// const p4 = document.querySelectorAll('p');
// p4[3].style.color = ' red';

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';
