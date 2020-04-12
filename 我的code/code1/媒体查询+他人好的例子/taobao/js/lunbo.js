layui.use('carousel', function () {
    var carousel = layui.carousel;
    carousel.render({
        elem: '#test1',
        width: '896px', //设置容器宽度
        heigt:'280px',
        arrow: 'always', //始终显示箭头
        interval:'2000'
    });
});