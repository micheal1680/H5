//app.js
App({
    // 在小程序初始化时触发
    onLaunch(options) {
        
    },
    // 在小程序显示时触发
    onShow(options) {
        // console.log("onShow")
    },
    // 在小程序隐藏是触发
    onHide() {
        // console.log("onHide")
    },
    onError(msg) {
        console.log(msg)
    },
    globalData: 'I am global data'
})