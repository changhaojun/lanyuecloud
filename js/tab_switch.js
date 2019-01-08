function tabSwitch(titleList, contentList, model) {
    let titleActive, contentActive;
    if(model === 'product') {
        titleActive = 'product-active';
        contentActive = 'product-content-active';
    }else if(model === 'case') {
        titleActive = 'case-active';
        contentActive = 'case-content-active';
    }else {
        titleActive = 'title-active';
        contentActive = 'content-active';
    }
    for(let i in titleList) {
        titleList[i].onmouseover = function() {
            if(this.className.indexOf(titleActive) == -1) {
                let eq = this.getAttribute('data-eq');
                for(let k in titleList) {
                    titleList[k].classList.remove(titleActive);
                }
                this.classList.add(titleActive);
                for(let j in contentList) {
                    contentList[j].classList.remove(contentActive);
                }
                contentList[eq].classList.add(contentActive);
            }
        }
    }
}