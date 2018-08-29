Page({
  data: {
    selectedId: '0',
    suggestArr: [],   //推荐职业id
    tjjobdetail: [],  //推荐职业详情
    tjmoney: [],      //推荐职业薪资
    tjdetail: [],     //推荐职业介绍
    mytab: [],        //推荐职业选择器
  },
  TabChange(e) {
    this.setData({
      selectedId: e.detail
    })
  },
  onLoad: function () {

    var that=this

    wx.request({
      url: 'https://www.jnshu.com/a/occupation/list',
      method: 'GET',
      success: function(res) {     
        
        console.log('职业推荐请求成功')
        //打印返回数据
        // console.log(res.data);
        
        //储存并打印职业详情列表
        var result = res.data.data.occupations;
        // console.log(result)

        //获取前三的数据,并动态设置数据
        var suggestArr = wx.getStorageSync('key');
        that.setData({
          suggestArr: suggestArr
        }) 
        //打印前三的职业id
        console.log(that.data.suggestArr);
        
        // 遍历获取前三的职业数据
        var suggest = [];
        that.data.suggestArr.forEach(function(arrVal){
          result.forEach(function(dataVal){
            if (arrVal == dataVal.id) {
              suggest.push(dataVal);
            }
          });
        });
        //打印前三的职业列表详情
        console.log(suggest);
        that.setData({
          tjjobdetail: suggest
        })  

        //遍历这三个数组，将职位名称push到tjjobname里，职位工资push到tjmoney里,职位介绍push到tjdetail里
        var tjjobname = [], tjmoney = [], tjdetail=[];
        for (var index in suggest) {
          tjjobname.push(suggest[index].name);                      //推荐职位名称
          tjmoney.push(JSON.parse(suggest[index].salary));          //推荐职位工资
          tjdetail.push(JSON.parse(res.data.data.occupations[index].modules));     //职位介绍
        }
        //打印职位名称、职位工资、职位介绍
        console.log(tjjobname)
        console.log(tjmoney)
        console.log(tjdetail)

        //设置tab
        var tabarr=[{id: '0',title: ''},{id: '1',title: ''}, {id: '2',title: ''}];
        for (var i in tjjobname){
          tabarr[i].title = tjjobname[i]
        }
        console.log(tabarr)
        that.setData({
          mytab: tabarr
        }) 
        
        //处理职位工资数据，并储存处理后的数据 
        var moneyarr = [];
        for (var i in tjmoney) {
          if (tjmoney[i][0] && tjmoney[i][1] && tjmoney[i][2]) {
            moneyarr.push(tjmoney[i][0].time + "约" + tjmoney[i][0].salary + "k;" + tjmoney[i][1].time + "约" + tjmoney[i][1].salary + "k;" + tjmoney[i][2].time + "约" + tjmoney[i][2].salary + "k;")
          } else if (tjmoney[i][0] && tjmoney[i][1]) {
            moneyarr.push(tjmoney[i][0].time + "约" + tjmoney[i][0].salary + "k;" + tjmoney[i][1].time + "约" + tjmoney[i][1].salary + "k;")
          } else if (tjmoney[i][0]) {
            moneyarr.push(tjmoney[i][0].time + "约" + tjmoney[i][0].salary + "k;")
          }
        }
        console.log(moneyarr)
        that.setData({
          tjmoney: moneyarr
        }) 

        //职位介绍数据的动态设置
        that.setData({
          tjdetail: tjdetail
        })  
      }
    });
  }
});