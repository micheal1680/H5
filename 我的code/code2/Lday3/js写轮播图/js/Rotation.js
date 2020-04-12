function Rotation(selector) {
    var mydiv = document.querySelector(selector);
    this.width = mydiv.clientWidth;
    this.btn = document.querySelectorAll(selector + '>.btn>li');
    this.imgul = document.querySelector(selector + '>.imgs');
    this.sid=null;
    this.ind=0;
    this.init();
}
//实例化对象之上追加新的方法
Rotation.prototype.init = function () {
    for (var ind = 0; ind < this.btn.length; ind++) {
        var _this = this;  //代码编译的时候可能会报错，有可能是this指向不明，解决的方法之一：将this保存。如这行代码
        this.btn[ind].onmouseover = (function (a) {
            return function (type) {
                //显示对应的图片
                _this.imgul.style.marginLeft = -_this.width * a + 'px';
                // 修改当前展示的图片的下标
                _this.ind=a;
                // 并且使得自动轮播失效   前提是：这个动作是用户操作的
                type == 'auto' || clearInterval(_this.sid);//这里采用逻辑或‘||’，若'auto'为真则自动轮播，若假，则自动轮播失效
            }
        })(ind);//自运行函数
        // 鼠标移开开启自动轮播，前提是一开始就开启了自动轮播
        this.btn[ind].onmouseout=function(){
            console.log(_this.sid);
            if(_this.sid)  _this.auto();
        }
    }
}
 //实现自动轮播
Rotation.prototype.auto = function (ms) {
    console.log('auto');
    var ms = ms||3000;
    var _this = this;
    this.sid=setInterval(function (){
        _this.btn[(++_this.ind) % _this.btn.length].onmouseover('auto');//ind++%_this.btn.length实现：点击第一张图片时打印1，二->2,三->0，即1，2，0，1，2，0，1，2...
    }, ms);
}
//实现鼠标移入时，自动轮播取消，显示对应图片
// 鼠标移开后，开始自动轮播，并且显示的图片是下一页图片
