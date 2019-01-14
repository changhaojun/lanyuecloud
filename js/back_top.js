$(function() {
    function backTop() {
        let top;
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
        })
    } 
    backTop();
})