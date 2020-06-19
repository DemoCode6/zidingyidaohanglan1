//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
 
  onLoad: function () {
    this.setNavSize()
  },


// demo
  setNavSize: function() {
    var that = this
        , sysinfo = wx.getSystemInfoSync()
        , statusHeight = sysinfo.statusBarHeight
        , isiOS = sysinfo.system.indexOf('iOS') > -1
        , navHeight;
    if (!isiOS) {
        navHeight = 48;
    } else {
        navHeight = 44;
    }
    that.setData({
        status: statusHeight,
        navHeight: navHeight
    })
},

})
