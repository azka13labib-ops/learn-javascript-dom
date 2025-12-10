// // Semua tombol close
// const close = document.querySelectorAll('.close');

// // Loop modern menggunakan forEach
// close.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     // Menghilangkan card induknya
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//   card.addEventListener('click', function () {
//     alert('oke');
//   });
// });
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  if (e.target.className === 'close') {
    e.target.parentElement.style.display = 'none';
  }
});
