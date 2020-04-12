var set = {
    Range:function(from, to) {
        this.from   = from;
        this.to     = to;
    }
};

set.Range.prototype = {
    //为了演示方便，这里的属性只留一个，只是为了演示方便
    includes:function (a) {
        return a >= this.from && a <=this.to;
    }
};
//随便扩展
set.Range.prototype.foreach = function (f) {
    for (var i = this.from; i <= this.to; i++) {
        f(i);
    }
}