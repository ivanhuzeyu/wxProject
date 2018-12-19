import {
  db
} from '../../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    menulist: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    db.collection('listTest').doc('XBnUZHkPDdDCJ2lE').get().then(resp => {
      let data = resp.data;
      this.setData({
        userinfo:data
      });
    });
    db.collection('listTest').doc('XBoG04nnuWjciud9').get().then(resp => {
      let data = resp.data.data;
      this.data.menulist = data.menulist;
      this.setData({
        menulist:this.data.menulist
      })
    });
  },
  editpage(){
    wx.navigateTo({
      url: './edituserinfo/edituser',
    })
  }
})