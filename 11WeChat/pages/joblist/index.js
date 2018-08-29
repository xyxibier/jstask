Page({
  data: {
    active: 0,
    joblist: [],          //职位名称
    joblistdetail: [],    //职位详情
    jobmoney: [],         //职位工资
    jobdetail: [],        //职位介绍
  },

  onChange(e) {
    this.setData({
      active: e.detail
    })
  },
  onLoad: function (e) {

    var that=this;

    wx.request({
      url: 'https://www.jnshu.com/a/occupation/list',
      method: 'GET',
      success: function (res) {

        console.log('职业列表请求成功')

        //打印返回数据
        // console.log(res.data);

        //动态设置职业详情列表数据    
        that.setData({
          joblistdetail: res.data.data.occupations
        })  

        //遍历数组，将职位名称push到jobname里，职位工资push到money里,职位介绍push到otherdetail里
        var joblist = [], money = [], jobdetail = [];
        for (var index in res.data.data.occupations) {
          joblist.push(res.data.data.occupations[index].name);                      //职位名称
          money.push(JSON.parse(res.data.data.occupations[index].salary));          //职位工资
          jobdetail.push(JSON.parse(res.data.data.occupations[index].modules));     //职位介绍
        }
        //动态设置职位名称数据
        console.log(joblist)
        that.setData({
          joblist: joblist
        })  

        //打印职位工资
        // console.log(money)
        //处理职位工资数据，并动态设置处理后的数据
        var jobmoney = [];
        for (var i in money) {
          if (money[i][0] && money[i][1] && money[i][2]) {
            jobmoney.push(money[i][0].time + "约" + money[i][0].salary + "k;" + money[i][1].time + "约" + money[i][1].salary + "k;" + money[i][2].time + "约" + money[i][2].salary + "k;")
          } else if (money[i][0] && money[i][1]) {
            jobmoney.push(money[i][0].time + "约" + money[i][0].salary + "k;" + money[i][1].time + "约" + money[i][1].salary + "k;")
          } else if (money[i][0]) {
            jobmoney.push(money[i][0].time + "约" + money[i][0].salary + "k;")
          }
        }
        console.log(jobmoney)
        that.setData({
          jobmoney: jobmoney
        })  

        //职位介绍数据的动态设置
        // console.log(jobdetail)
        that.setData({
          jobdetail: jobdetail
        })  
      }
    });
  }
});