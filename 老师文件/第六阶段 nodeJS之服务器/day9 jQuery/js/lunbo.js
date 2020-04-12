var num = 0; //表示图片与圆点对应的下标

function run() {
    num++;

    num = num == 5 ? 0 : num; //当图片到最后一张时，下一张应该到第一张
    console.log(num)

    // $(".flash > li")找到.flash中的所有li元素，返回一个数组
    // eq(num) 根据下标获取元素
    //siblings 找到所有的同袍元素
    $(".flash > li").eq(num).fadeIn(500).siblings("li").fadeOut(500);

    $(".point > li").eq(num).css("background-color", "red").siblings("li").css("background-color", "#000");
}

// 开启定时器，自动播放
var timer = setInterval(run, 3000)

// function1表示鼠标滑到指定区域的回调函数
// function2表示鼠标滑出指定区域的回调函数
// $(".flash").hover(function1, function2)
$(".flash").hover(function() {
    clearInterval(timer);
}, function() {
    timer = setInterval(run, 2000);
})


