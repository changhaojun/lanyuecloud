(function() {
    let Mob = {
        init: function() {
            this.toggle($('.folding'), $('.menu-mobile'));
            this.toggle($('.menu-mobile>li>a'), 0, 1);
            this.toggle($('.second-menu a'), 0, 1);
        },
        toggle: function(initiative, passive, type=0) {
            if(!type) {
                initiative.click(function() {
                    passive.toggle();
                })
            }else {
                initiative.click(function() {
                    $(this).next().toggle();
                })
                if($('.menu-mobile').css('display') === 'none') {
                    $('.second-menu').hide();
                    $('.case-mobile').hide();
                }
            }
        }
    }
    Mob.init();
})();