const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// const sizeButtons = document.querySelectorAll('.size-btn');
//   sizeButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     sizeButtons.forEach((b)=> {
//       b.classList.remove('active');
//     });
//     btn.classList.add('active');
//   });
// });


