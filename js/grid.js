// const elem = document.querySelector('.grid');
// const iso = new Isotope(elem, {
//   // options
//   itemSelector: '.gallery__item',
//   layoutMode: 'masonry',
// });

const elem = document.querySelector('.grid');
const msnry = new Masonry(elem, {
  // options
  itemSelector: '.grid__item',
  //   columnWidth: 200,
});

// element argument can be a selector string
//   for an individual element
// const msnry = new Masonry('.grid', {
//   // options
// });
