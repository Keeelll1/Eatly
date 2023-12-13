const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
});

const category = () => {
    const categoryBlock = document.querySelectorAll('.category-block')

    categoryBlock.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}

category()

const accordionMenu = () => {
    const accordionBlock = document.querySelectorAll('.accordion-block')
        accordionBlock.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
}

accordionMenu()