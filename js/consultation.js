var pass = 0; 
$(function(){
    $(".inner").mousedown(function(e){
        var el = $(".inner"),os = el.offset(),dx,$span=$(".outer>span"),$filter=$(".filter-box"),_differ=$(".outer").width()-el.width();
        $(document).mousemove(function(e){
            dx = e.pageX - os.left;
            if(dx<0){
                dx=0;
            }else if(dx>_differ){
                dx=_differ;
            }
            $filter.css('width',dx);
            el.css("left",dx);
        });
        $(document).mouseup(function(e){
            $(document).off('mousemove');
            $(document).off('mouseup');
            dx = e.pageX - os.left;
            if(dx<_differ){
                dx=0;
                $span.html("轻按住滑块，拖动到最右边");
            }else if(dx>=_differ){
                dx=_differ;
                $(".outer").addClass("act");
                $span.html("验证通过！");
                pass = 1;
                el.html('<i class="iconfont icon-duihao"></i>');
            }
            $filter.css('width',dx);
            el.css("left",dx);

        })
    })
})
function check(form) {
    if(form.userCompany.value=='') {
          $('.company-alarm').css('visibility','visible');
          setTimeout(function(){
            $('.company-alarm').css('visibility','hidden');
          },1500);
          form.userCompany.focus();
          return false;
     }
     if(form.userName.value==''){
        $('.user-alarm').css('visibility','visible');
        setTimeout(function(){
            $('.user-alarm').css('visibility','hidden');
          },1500);
          form.userName.focus();
          return false;
      }
      if(form.phoneNum.value==''){
        $('.phone-alarm').css('visibility','visible');
        setTimeout(function(){
            $('.phone-alarm').css('visibility','hidden');
          },1500);
        form.phoneNum.focus();
        return false;
    }else{
        checkPhone();
    }
    if(!pass){
        $('.slider-alarm').css('visibility','visible');
        setTimeout(function(){
            $('.slider-alarm').css('visibility','hidden');
          },1500);
    }else{
        var  data ={
            phone:"13720759061",
            "templateCode":"SMS_155570518",
            "customer":$('.user-company').val(),
            "contact":$('.user-name').val(),
            "contactway":$('.phone-num').val(),
        }
        var that = this;
        var selfs = self;
        $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "http://114.215.46.56:17737/emitCode" ,//url
                data: data,
                success:function(result){
                    layer.open({
                        type: 1
                        ,offset: 't', //具体配置参考：offset参数项
                        area:'380px'
                        ,content: '<p style="padding: 60px 80px; line-height:24px">信息已发送，稍后客户经理将联系您!</p>'
                        ,btn: '确认'
                        ,btnAlign: 'c' //按钮居中
                        ,shade: .6 //不显示遮罩
                        ,yes: function(){
                          layer.closeAll();
                          that.location.reload();
                          selfs.location.reload();
                        },
                        cancel: function(){ 
                            layer.closeAll();
                            that.location.reload();
                            selfs.location.reload();
                          } 
                      });
                    
                }
            });

    }
  }

  function checkPhone(){ 
    var phone = $('.phone-num').val();
    var myreg=/^1[3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(phone)){ 
        $('.phone-alarm').css('visibility','visible');
        setTimeout(function(){
            $('.phone-alarm').css('visibility','hidden');
          },1500);
        return false; 
    } 
}