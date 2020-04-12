var testmodel = (function () {
    var n = 1;
    function fn1 () {
        console.log('fn1');
    }

    function fn2 () {
        console.log(n++);
    }

    function fn3 () {
        console.log(n++);
    }
    
    return {
        myfn1:fn1,
        myfn2:fn2,
        myfn3:fn3
    };
})();
