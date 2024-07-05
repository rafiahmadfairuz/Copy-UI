
// logika untuk navigasi saat di scroll
document.addEventListener('scroll', () => {
    const header  = document.querySelector('header')

    if (window.scrollY > 0) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
   })
   
document.addEventListener('scroll', () => {
    const section  = document.querySelector('section')

    if (window.scrollY > 0) {
      section.classList.add('scroll')
    } else {
      section.classList.remove('scroll')
    }
   })
// akhir nav



// logika swipper js
    var swiper = new Swiper(".slide-konten", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centerSlide: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// Akhir swipper



// logika accordition agar tidak tertutup
    document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var button = item.querySelector('.accordion-button');
        var collapse = item.querySelector('.accordion-collapse');

        button.addEventListener('click', function (event) {
            if (collapse.classList.contains('show')) {
                event.preventDefault();
            } else {
                var openItems = document.querySelectorAll('.accordion-collapse.show');
                openItems.forEach(function (openItem) {
                    openItem.classList.remove('show');
                    openItem.classList.add('no-transition');
                    openItem.style.height = null;
                });
                collapse.classList.add('show');
                collapse.classList.add('no-transition');
                collapse.style.height = collapse.scrollHeight + "px";
            }
        });

        collapse.addEventListener('transitionend', function () {
            collapse.classList.remove('no-transition');
        });
    });
});
// akhir accordition

// logika loading
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 800);
});