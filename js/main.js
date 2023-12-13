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
    slidesPerView: 1.3,
    centeredSlides: false,
    spaceBetween: 40,

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
  });