const   list = document.querySelector('.list'),
        items = document.querySelectorAll('.blocks__item'),
        listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', ev => {
        const targetId = ev.target.dataset.id
        const target = ev.target

        if(target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }
        

        switch(targetId) {
            case 'all':
                getItems('blocks__item')
                break;
            case 'winter':
                getItems(targetId)
                break
            case 'spring':
                getItems(targetId)
                break
            case 'summer':
                getItems(targetId)
                break
            case 'autumn':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

