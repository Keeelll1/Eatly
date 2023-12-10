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

const favorites = () => {
    const favoritesBtn = document.querySelectorAll('.favorites')

        favoritesBtn.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })

    const dishesLike = document.querySelectorAll('.dishes-heart')

        dishesLike.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
}

favorites()

const addBlockView = () => {
    const openBtn = document.querySelectorAll('.view-open-btn'),
        blockView = document.querySelectorAll('.view-block-close')

        openBtn.forEach(item => {
            item.addEventListener('click', () => {
                let blockNumber = item.getAttribute('data-number')

                blockView.forEach(block => {
                    if (block.getAttribute('data-number') == blockNumber){
                        block.classList.toggle('active')
                    }
                })

                let arrow = item.querySelector('.view-open-img')
                arrow.classList.toggle('active')
            })
        })
}

addBlockView()

const accordionMenu = () => {
    const accordionBlock = document.querySelectorAll('.accordion-block')
        accordionBlock.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
}

accordionMenu()