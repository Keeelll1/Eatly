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

const dropDown = () => {
    const dropDownBtn = document.querySelector('.purchases-content-btn-wrapper'),
        dropDownItems = document.querySelector('.purchases-content-select'),
        arrow = document.querySelector('.purchases-content-btn-arrow'),
        text = document.querySelector('.purchases-content-btn-text'),
        selectText = document.querySelectorAll('.purchases-content-btn-select')

            dropDownBtn.addEventListener('click', () => {
                dropDownItems.classList.toggle('active')
                arrow.classList.toggle('active')
                selectText.forEach(item => {
                    item.addEventListener('click', () => {
                        text.textContent = item.textContent
                    })
                })
            })
}

dropDown()

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
  });