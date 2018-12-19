import {
  db
} from '../../../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    tipmodal: {
      msg: "",
      flag: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    db.collection('listTest').doc('XBnUZHkPDdDCJ2lE').get().then(resp => {
      let data = resp.data;
      this.setData({
        username: data.username
      })
    });
  },
  //获取input值
  usernameget(e) {
    this.setData({
      username: e.detail.value
    })
  },
  //隐藏模态框
  hidemodal() {
    this.data.tipmodal.flag = false;
    this.data.tipmodal.msg = "";
    this.setData({
      tipmodal: this.data.tipmodal,
    })
  },
  //调用模态框
  showmodal(msg) {
    this.data.tipmodal.flag = true;
    this.data.tipmodal.msg = msg;
    this.setData({
      tipmodal: this.data.tipmodal,
    })
  },
  //点击提交
  editsubmit() {
    let username = this.data.username;
    if (!username) {
      this.showmodal('用户名不能为空，请仔细审核再次进行提交！');
    } else {
      db.collection('listTest').doc('XBnUZHkPDdDCJ2lE').update({
        data: {
          "username": username
        }
      }).then(resp => {
        console.log(username);
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    }
  }

})