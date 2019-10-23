!function(){
    function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
        }
        requestAnimationFrame(animate)
}.call()
