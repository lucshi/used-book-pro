var app = getApp();
var db = wx.cloud.database();

Page({
      data: {
            list: [{
                  title: '该程序是做什么的？',
                  id: 0,
                  des: ['本程序主要是方便北京某小学各个小区的学生发布自己的二手书，包括教材、教辅和课外书信息。',
                        '如果你不是该校的学生，可以联系作者，为你的小学制作一个小程序。'
                  ],
                  check: true,
            }, {
                  title: '该程序收费吗？',
                  id: 1,
                  des: ['这是一个公益项目，永久承诺不收取任何费用。'],
                  check: false,
            }, {
                  title: '发布消息时为什么要留下联系方式？',
                  id: 2,
                  des: ['本程序交易完全由交易双方沟通，不提供收费交易接口，请使用联系方式联系转让者。'],
                  check: false,
            }, ]
      },
      onReady() {},

      show(e) {
            var that = this;
            let ite = e.currentTarget.dataset.show;
            let list = that.data.list;
            if (!ite.check) {
                  list[ite.id].check = true;
            } else {
                  list[ite.id].check = false;
            }
            that.setData({
                  list: list
            })
      },
      //跳转页面
      go(e) {
            wx.navigateTo({
                  url: e.currentTarget.dataset.go
            })
      },
      onLoad() {

      },

})