document.addEventListener('scroll',function(){
    var scroll = window.pageYOffset;
    document.querySelector('.blur-banner').style.filter = 'blur('+ scroll/50 +'px)';
})
