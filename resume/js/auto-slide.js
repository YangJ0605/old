! function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    findClosestAndRemoveClass()
    window.addEventListener('scroll', function () {
        findClosestAndRemoveClass()
    })
    

    function findClosestAndRemoveClass() {
        let specialTags = document.querySelectorAll('[data-x]')
        // console.log(specialTags)
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(window.scrollY - specialTags[i].offsetTop) < Math.abs(window.scrollY - specialTags[minIndex].offsetTop)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        for (let i = 0; i < specialTags.length; i++) {
            specialTags[i].classList.remove('highlight')
        }
        specialTags[minIndex].classList.add('highlight')
        let id = specialTags[minIndex].id
        // console.log(id)
        let a = document.querySelector('a[href="#' + id + '"]')
        // console.log(a)
        let li = a.parentElement
        let brotherAndMe = li.parentElement.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            // console.log(brotherAndMe[i])
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()