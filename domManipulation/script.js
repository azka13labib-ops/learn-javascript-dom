// dom manipulation
// buat element baru
// const pBaru = document.createElement('p');
// const textbaru = document.createTextNode('paragraft baru');

// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(textbaru);
// // simpan pbaru diakhir section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const tagLibaru = document.createTextNode('itembaru');

liBaru.appendChild(tagLibaru);

const ul = document.querySelector(' #b ul');
const li = document.querySelector('#b li:nth-child(2)');

ul.insertBefore(liBaru, li);
const pBaru = document.createElement('p');
const textbaru = document.createTextNode('baruwoi');

pBaru.appendChild(textbaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
