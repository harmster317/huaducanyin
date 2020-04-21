//index.js
var util = require('../../../utils/util.js');

//获取应用实例
var app = getApp()
Page({
  data: {
    status: 0,
    flag:true,
    num:0,
    currentPosition: "order0",
    imgUrls: [
      "/image/1.jpg",
      "/image/1.jpg",
      "/image/1.jpg"
    ]
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
  changeMenu: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      status: index,
      num: 0,
      currentPosition: "order" + index
    })
  },
  changeEvent:function (e){
    this.setData({
      num: e.target.dataset.num
    })
    console.log(data.num)
  },
  scrollBottom: function () {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading();
    }, 1000)
  },
  previewImages: function () {
    wx.previewImage({
      current: 'http://p1.meituan.net/460.280/deal/5cae86dd953bc50457aea6219e85287d79414.jpg@460w_280h_1e_1c',
      urls: [
        'http://p1.meituan.net/460.280/deal/5cae86dd953bc50457aea6219e85287d79414.jpg@460w_280h_1e_1c',
        'http://p1.meituan.net/460.280/deal/5cae86dd953bc50457aea6219e85287d79414.jpg@460w_280h_1e_1c',
        'http://p1.meituan.net/460.280/deal/5cae86dd953bc50457aea6219e85287d79414.jpg@460w_280h_1e_1c',
        'http://p1.meituan.net/460.280/deal/5cae86dd953bc50457aea6219e85287d79414.jpg@460w_280h_1e_1c'
      ],
    })
  }
})
