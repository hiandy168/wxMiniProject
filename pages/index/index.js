//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        tabIndex: 0
    },
    tabHandle: function(e) {
        this.tabIndex = e.currentTarget.dataset.idx;

        this.setData({
      		tabIndex:this.tabIndex  	
        })
    },
    onLoad: function() {

    },

})