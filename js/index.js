  function openMenu() {
            document.getElementById("mobileMenu").classList.add("active");
        }

        function closeMenu() {
            document.getElementById("mobileMenu").classList.remove("active");
        }


document.addEventListener("DOMContentLoaded", function(){

    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,

        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },

        pagination:{
            el: ".swiper-pagination",
            clickable: true
        },

        breakpoints:{
            0:{ slidesPerView:1 },
            768:{ slidesPerView:2 },
            992:{ slidesPerView:3 }
        }
    });

});

