//要一个从app.js到page的桥梁
//微信提供 应用对象
const app = getApp()

//得到页面
Page({
  //页面数据
  data:{
    //user: {}
    slides: null,
    entities:null
  },
  //生命周期：在某点掐点开来：on+'....'
  //on表示进行时
  //当应用打开时会触发一个onLaunch
  //load表示正在加载时，ready是加载好了
  //所以load更快
  onLoad() {
    // this -> page
    console.log(app,'页面显示了');
    //调用app里面的api
    //响应式的页面
    //热更新：不用刷新，自动编译
    setTimeout(()=> {
      //this指向page
      this.setData({
        slides:app.globalData.slides,
        entities:app.globalData.vehicles
    })
    },2000)
    
  },
  onReady(){
    console.log('ready GO');
  }
})