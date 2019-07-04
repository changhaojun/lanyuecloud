$(function() {
    function backTop() {
        $('.back-top').hide();
        $(window).scroll(function() {
            let top = $(document).scrollTop();
            if(top > 100) {
                $('.back-top').show();
            }else {
                $('.back-top').hide();
            }
        })
        $('.back-top').click(function() {
            $('body, html').animate({
                scrollTop: 0
            },500);
            $('.back-top').css('background', 'rgba(0,0,0,0.6)');
        })
        const parent1 = $('.menu-mobile', parent.document);
        document.querySelector('body').addEventListener('click', function() {
            parent1.hide();
        })
    } 
    backTop();
})