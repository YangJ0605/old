! function () {
    let view = document.querySelector('nav>ul') /* all返回的是数组，不带all返回的是dom对象*/
    let controller = {
            view: null,
            init: function (view) {
                this.view = view
                this.bindEvents()
            },
            scrollToElement: function (element) {
                let top = element.offsetTop
                let currentTop = window.scrollY
                let targetTop = top - 100
                let distance = targetTop - currentTop
                let t = Math.abs((distance / 100) * 300)
                if (t > 500) {
                    t = 500
                }
                var coords = {
                    y: currentTop
                }
                var tween = new TWEEN.Tween(coords)
                    .to({
                        y: targetTop
                    }, t)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function () {
                        window.scrollTo(0, coords.y)
                        // console.log('zz')
                    })
                    .start()
            },
            bindEvents: function(){
                let liTags = this.view.querySelectorAll('li')
    
                for (let i = 0; i < liTags.length; i++) {
                    liTags[i].onmouseenter = function (e) {
                        e.currentTarget.classList.add('active')
                    }
                    liTags[i].onmouseleave = function (e) {
                        e.currentTarget.classList.remove('active')
                    }
                }
                let aTags = this.view.querySelectorAll('li>a')
                // console.log(aTags)
    
                for (let i = 0; i < aTags.length; i++) {
                    aTags[i].onclick = (e) => {
                        e.preventDefault() //
                        // console.log(aTags[i]) 
                        let a = e.currentTarget // console.log(a) 
                        // e.currentTarget.classList.add('active')
                        let herf = a.getAttribute('href')
                        let element = document.querySelector(herf)
                        this.scrollToElement(element)
                    }
                }

        }
    }
    controller.init(view)
}.call()