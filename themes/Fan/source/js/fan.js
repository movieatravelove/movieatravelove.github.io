(function () {
    /**
     * 内容的宽度为 900 ，侧边栏的宽度为 300
     * 900 的时候不能出现侧边栏
     */
    window.onresize = (e) => {
        let width = e.currentTarget.innerWidth;
        let open = $('#side-button').hasClass('close');
        if (width <= 900="" 900)="" {="" document.documentelement.style.fontsize="width" 7.5="" +="" 'px';="" 设置body字体大小，不影响body内字体大小="" document.body.style.fontsize="12px" ;="" $('#menu-inner').addclass('min-menu-inner');="" $('#side-button').hide();="" if="" (open)="" $('#sidebar').velocity('stop').velocity({left:="" '-300px'},="" 800,="" 'spring');="" $('#main-container').velocity('stop').velocity({marginleft:="" '0px'},="" }="" else="" $('#menu-inner').removeclass('min-menu-inner');="" $('#side-button').show();="" '300px'},="" };="" **="" *="" 当宽度小于="" 的时候不显示展开侧边栏按钮="" (window.innerwidth="" <="900)" @description="" post="" 页面展开侧边栏="" 第一次加载时候判断页面的宽度，如果宽度小则不展开侧边栏=""> 900 && $('#post').length > 0) {
        setTimeout(function () {
            $('#side-button').click();
        }, 500);
    }

    $('.menu-list-icon').click(() => {
        $('#menu-inner').toggleClass('show-min-menu-inner');
    });

})();</=>