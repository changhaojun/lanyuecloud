$(function(){
    function tabs(tabTit,on,tabCon){
        $(tabTit).children().click(function(){
            var index = $(tabTit).children().index(this);
            $(this).addClass(on).siblings().removeClass(on);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    };
    tabs(".kinds-name","active",".kinds-content");
});
$(function(){
    function tabs(tabTit,on,tabCon){
        $(tabTit).children().click(function(){
            var index = $(tabTit).children().index(this);
            $(this).addClass(on).siblings().removeClass(on);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    };
    tabs(".method","active",".method-content");
});
