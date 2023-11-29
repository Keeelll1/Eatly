const favorites = () => {
    const favoritesBtn = document.querySelectorAll('.favorites'),
        favoritesContent = document.querySelectorAll('.favorites-circle')

        favoritesBtn.forEach(item => {
            item.addEventListener('click', () => {

                favoritesContent.forEach(content => {
                    content.classList.toggle('active')
                })

            })
        })
}

favorites()

const addBlockRest = () => {
    const openBtn = document.querySelectorAll('.rest-open-btn'),
        block = document.querySelector('.rest-block-close'),
        arrow = document.querySelectorAll('.rest-open-img')

        openBtn.forEach(item => {
            item.addEventListener('click', () => {
                block.classList.toggle('active')

                arrow.forEach(content => {
                    content.classList.toggle('active')
                })
            })
        })
}

addBlockRest()