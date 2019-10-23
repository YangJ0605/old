!function(){
    let view = document.getElementById('topNavBar')
    let controller = {
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            var view = this.view
            window.addEventListener('scroll',()=>{
                if(window.scrollY>0){
                this.view.classList.add('sticky')
                }else{
                this.view.classList.remove('sticky')
                }
            })
        }
    }
    controller.init(view)
}.call()
