// 封装成一个公用的  “方法”=---》构造函数---》类
// 在构造函数里面，一般来讲，只负责属性的初始化
//在原型之上实现具体的功能
function Rotation(selector) {
    // 找到轮播图所在的大盒子
    var mydiv = document.querySelector(selector);
    // 获取视觉视口的宽度，也就是大盒子的宽度
    this.width = mydiv.clientWidth;
    //获取到所有的事件源，也就是  点
    this.btn = document.querySelectorAll(selector + '>.btn>li');
    // 获取到图片所在的盒子，也就是布局视口
    this.imgul = document.querySelector(selector + '>.imgs');
    // 定时器的id属性
    this.sid = null;
    // 当前展示的图片的下标
    this.ind = 0;
    // 初始化
    this.init();
}
Rotation.prototype.init = function(){
    for (var ind = 0; ind < this.btn.length; ind++) {
        var _this = this;
         this.btn[ind].onmouseover = (function(a){
             return function(type){
                 //显示对应的图片
                _this.imgul.style.marginLeft =  -_this.width * a +'px';
                // 修改当前展示的图片的下标
                _this.ind = a;
                // 并且自动轮播失效  前提条件是：这个动作是用户操作的
                type == 'auto' || clearInterval(_this.sid);
             }
         })(ind);
         //鼠标移开开启自动轮播，前提是一开始就开启了自动轮播
          this.btn[ind].onmouseout = function(){
                console.log(_this.sid);
                if(_this.sid)  _this.auto();
          }
    }
}
// 自动轮播
Rotation.prototype.auto = function(ms){
    console.log('auto');
    var ms =  ms || 3000;
    var _this = this;
    this.sid = setInterval(function(){
        _this.btn[(++_this.ind)%_this.btn.length].onmouseover('auto');
    }, ms);
}
/*BUG:  jquery
1,鼠标移动上来后，应该显示对应的图片并且自动轮播失效；
2，鼠标移开之后应该显示的是当前图片的下一张图片；
*/