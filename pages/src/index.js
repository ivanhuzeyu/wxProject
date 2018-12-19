import  {db} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      nav1:'Ltplus',
      nav2:"个人信息"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //按钮点击事件处理
  touserInfo(){
    wx.navigateTo({
      url: './userinfo/user',
    })
  }
})