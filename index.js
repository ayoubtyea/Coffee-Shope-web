let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}



let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}






// var swiper = new Swiper(".course-slider", {
//     spaceBetween: 20,
//     grapCursor:true,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//           slidesPerView: 1, 
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//   });


// var swiper = new Swiper(".teachers-slider", {
//     spaceBetween: 20,
//     grapCursor:true,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//           slidesPerView: 1, 
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//   });


// var swiper = new Swiper(".reviews-slider", {
//     spaceBetween: 20,
//     grapCursor:true,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         540: {
//           slidesPerView: 1, 
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//   });

// window.onscroll = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.toggle('active');
//     cartItem.classList.toggle('active');

// }