// this script prevents user from scrolling when mobile menu is expanded.

// window.onload = function () {
//   const menuToggle = document.getElementById("menuToggleCheckbox");
//   const hamborger = document.querySelector('input');

//   menuToggle.addEventListener('change', e => {
//       if(e.target.checked === true) {
//         document.body.classList.add("fixed-position")
//       }
//     if(e.target.checked === false) {
//       document.body.classList.remove("fixed-position")
//       }
//   });
// }

window.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.getElementById("menuToggleCheckbox");

  menuToggle.addEventListener('change', e => {
      if(e.target.checked === true) {
        document.body.classList.add("fixed-position")
        document.documentElement.classList.add("fixed-position")
      }
    if(e.target.checked === false) {
      document.body.classList.remove("fixed-position")
      document.documentElement.classList.remove("fixed-position")
      }
  });
});




