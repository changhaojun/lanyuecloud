(function() {
    const App = {
        init: function() {
            this.findDom();
            this.tabSwitch(this.titleLi1, this.contentLi1);
            this.tabSwitch(this.titleLi2, this.contentLi2);
        },
        findDom: function() {
            this.titleLi1 = [].slice.call($('.block-1 .title-ul>li'));
            this.contentLi1 = [].slice.call($('.block-1 .content-ul>li'));
            this.titleLi2 = [].slice.call($('.block-2 .title-ul>li'));
            this.contentLi2 = [].slice.call($('.block-2 .content-ul>li'));
        },
        tabSwitch: function(titleList, contentList) {
            for(let i in titleList) {
                titleList[i].onmouseover = function() {
                    if(this.className.indexOf('titleActive') == -1) {
                        let eq = this.getAttribute('data-eq');
                        for(let k in titleList) {
                            titleList[k].classList.remove('titleActive');
                        }
                        this.classList.add('titleActive');
                        for(let j in contentList) {
                            contentList[j].classList.remove('contentActive');
                        }
                        contentList[eq].classList.add('contentActive');
                    }
                }
            }
        }
    }
    App.init();
})();