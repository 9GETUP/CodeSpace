// pages/vehicles/show.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      entity:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    const { id } = options
    //const id = options.id;
    // console.log(id);
    console.log(app.globalData.vehicles);
    const entity = app.globalData.vehicles.filter((item) =>{
      return item.id == id
    });
    //console.log(entity);
    this.setData({
      entity: entity[0]
    })
    // 设置标题
    wx.setNavigationBarTitle({
      title: this.data.entity.header
    })
  },
  onReady(){
    console.log('ready GO');
  }
})
