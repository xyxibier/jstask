Page({
  data: {
    pickerArray:[
      {
        index:0,
        title:"学历",
        bind:'setxueli',
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 10, 3: -50, 4: -50, 5: -100, 6: -50, 7: 30, 8: 50, 9: 50, 10: -1000, 11: -1000, 12: 30, name: '初中以下' },
          { 1: -1000, 2: 20, 3: 0, 4: 0, 5: -50, 6: 10, 7: 30, 8: 50, 9: 50, 10: -1000, 11: -1000, 12: 30, name: '高中' },
          { 1: -1000, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 50, 10: -1000, 11: -1000, 12: 30, name: '大专' },
          { 1: -1000, 2: 30, 3: 40, 4: 40, 5: 40, 6: 40, 7: 40, 8: 40, 9: 30, 10: -1000, 11: -1000, 12: 40, name: '本科'},
          { 1: -1000, 2: 30, 3: 50, 4: 40, 5: 50, 6: 30, 7: 50, 8: 30, 9: -30, 10: -1000, 11: -1000, 12: 50, name: '硕士' },
          { 1: -1000, 2: 30, 3: 50, 4: 40, 5: 50, 6: 30, 7: 50, 8: 30, 9: -30, 10: -1000, 11: -1000, 12: 50, name: '博士' }
        ],
      }, {
        index: 0,
        title: "性别",
        bind:"setsex",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50, 8: 30, 9: 30, 10: -1000, 11: -1000, 12: 30, name: '男' },
          { 1: -1000, 2: 50, 3: 30, 4: 30, 5: 10, 6: -30, 7: 50, 8: 50, 9: 50, 10: -1000, 11: -1000, 12: 50, name: '女' }
        ],
      }, {
        index: 0,
        title: "年龄",
        bind: "setage",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 5, 3: 0, 4: 0, 5: -50, 6: 15, 7: 20, 8: 30, 9: 50, 10: -1000, 11: -1000, 12: 20, name: '18岁以下' },
          { 1: -1000, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, 9: 20, 10: -1000, 11: -1000, 12: 20, name: '18~24岁' },
          { 1: -1000, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, 9: 20, 10: -1000, 11: -1000, 12: 20, name: '25~30岁' },
          { 1: -1000, 2: -30, 3: -30, 4: -30, 5: -30, 6: -30, 7: 50, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 50, name: '30岁以上' }
        ],
      }, {
        index: 0,
        title: "特长",
        bind: "settechang",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 0, name: '无特长' },
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 50, 9: 0, 10: -1000, 11: -1000, 12: 30, name: '绘画基础' },
          { 1: -1000, 2: 10, 3: 10, 4: 10, 5: 10, 6: 50, 7: 0, 8: 0, 9: 10, 10: -1000, 11: -1000, 12: 0, name: '网络相关' },
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 30, 9: 10, 10: -1000, 11: -1000, 12: 30, name: '原型设计' },
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 30, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 50, name: '文字功底' }
        ],
      }, {
        index: 0,
        title: "专业",
        bind: "setzhuanye",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 30, 3: 0, 4: 0, 5: 0, 6: 0, 7: 30, 8: 50, 9: 50, 10: -1000, 11: -1000, 12: 30, name: '无专业' },
          { 1: -1000, 2: 35, 3: 35, 4: 35, 5: 50, 6: 40, 7: 40, 8: 40, 9: 30, 10: -1000, 11: -1000, 12: 40, name: '计算机相关' },
          { 1: -1000, 2: 30, 3: 35, 4: 35, 5: 40, 6: 30, 7: 30, 8: 30, 9: 30, 12: 30, 10: -1000, 11: -1000, name: '理工科' },
          { 1: -1000, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 50, 8: 50, 9: 30, 10: -1000, 11: -1000, 12: 50, name: '文科' }
        ],
      }, {
        index: 0,
        title: "逻辑",
        bind: "setluoji",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 40, 3: 10, 4: 10, 5: 10, 6: 10, 7: 20, 8: 50, 9: 50, 10: -1000, 11: -1000, 12: 20, name: '渣渣' },
          { 1: -1000, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 30, 10: -1000, 11: -1000, 12: 30, name: '普通' },
          { 1: -1000, 2: 40, 3: 40, 4: 40, 5: 50, 6: 40, 7: 30, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 30, name: '卓越' }
        ],
      }, {
        index: 0,
        title: "性格",
        bind: "setxingge",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: -10, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: -10, name: '沉默寡言' },
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 0, name: '中规中矩' },
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, 9: 0, 10: -1000, 11: -1000, 12: 50, name: '开朗活泼' }
        ],
      }, {
        index: 0,
        title: "偏好",
        bind: "setlike",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 50, 3: 40, 4: 40, 5: 40, 6: 0, 7: 30, 8: 30, 9: 20, 10: -1000, 11: -1000, 12: 30, name: '所见即所得' },
          { 1: -1000, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 30, 10: -1000, 11: -1000, 12: 30, name: '抽象推理' }
        ],
      }, {
        index: 0,
        title: "社交",
        bind: "setshejiao",
        option: [
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1, name: '请选择'},
          { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 0, 9: 50, 10: -1000, 11: -1000, 12: 50, name: '喜欢' },
          { 1: -1000, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: -30, 8: 50, 9: 0, 10: -1000, 11: -1000, 12: -30, name: '不喜欢', }
        ],
      }
    ],
    selectArray: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    baseScore: { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1 }
  },

  setxueli: function (e) {
    const curindex=e.target.dataset.current;
    this.data.pickerArray[curindex].index=e.detail.value;
    this.setData({
       pickerArray:this.data.pickerArray,
    })
    this.data.selectArray[0] = this.data.pickerArray[curindex].index;
  },
  setsex: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[1] = this.data.pickerArray[curindex].index;
  },
  setage: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[2] = this.data.pickerArray[curindex].index;
  },
  settechang: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[3] = this.data.pickerArray[curindex].index;
  },
  setzhuanye: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[4] = this.data.pickerArray[curindex].index;
  },
  setluoji: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[5] = this.data.pickerArray[curindex].index;
  },
  setxingge: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[6] = this.data.pickerArray[curindex].index;
  },
  setlike: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[7] = this.data.pickerArray[curindex].index;
  },
  setshejiao: function (e) {
    const curindex = e.target.dataset.current;
    this.data.pickerArray[curindex].index = e.detail.value;
    this.setData({
      pickerArray: this.data.pickerArray,
    })
    this.data.selectArray[8] = this.data.pickerArray[curindex].index;
  },
  goToListPage: function () {  
    var that = this;
    //储存基础分数值
    var baseScore = this.data.baseScore;
    //打印选项
    console.log(this.data.selectArray)  

    //遍历选项数组求和
    this.data.pickerArray.forEach(function(val, index){
      //获取选项对应的分值，储存到chooseScore中并打印
      var chooseScore = val.option[that.data.selectArray[index]];
      // console.log(chooseScore);
      //循环遍历基础score对象
      for (var baseItem in baseScore) {
        //循环option对象
        for (var chooseItem in chooseScore) {
          //判断如果key值相同则累加到相应value
          if (baseItem == chooseItem) {
            baseScore[baseItem] += chooseScore[baseItem];
          }
        }
      }
    });

    //打印求和后的分数值对象
    console.log(baseScore);
    //获取分数值数组
    var valueName = [];
    for (var i in baseScore) {
      valueName.push(baseScore[i]);
    }
    console.log(valueName);

    //value数组排序
    var sortScore = valueName.sort(function(a, b){
      return b-a;
    });
    console.log(sortScore);

    //value数组选出分数前三
    sortScore.splice(3, 9);
    console.log(sortScore);
    //遍历数组和对象取得对应前三推荐职业
    var topThree = [];
    sortScore.forEach(function(val){
      for (var i in baseScore) {
        if (baseScore[i] == val) {
          topThree.push(i);
        }
      }
    });
    console.log(topThree);
    //topthree数组去重
    var newarr = [];
    for(var i in topThree){
      //如果当前数组的第i项在当前数组中第一次出现的位置不是i，那么表示第i项是重复的，忽略掉。否则存入结果数组。
      if (topThree.indexOf(topThree[i]) == i){
        newarr.push(topThree[i])
      }
    }
    console.log(newarr);
    newarr.splice(3);
    console.log(newarr);

    //将最终处理好的值保存到本地
    wx.setStorageSync('key', newarr);

    //表单验证
    if (this.data.selectArray[0] == 0) {
      wx.showToast({
        title: '请选择学历！',
        icon: 'none'
      })
    } else if (this.data.selectArray[1] == 0) {
      wx.showToast({
        title: '请选择性别！',
        icon: 'none'
      })
    } else if (this.data.selectArray[2] == 0) {
      wx.showToast({
        title: '请选择年龄！',
        icon: 'none'
      })
    } else if (this.data.selectArray[3] == 0) {
      wx.showToast({
        title: '请选择特长！',
        icon: 'none'
      })
    } else if (this.data.selectArray[4] == 0) {
      wx.showToast({
        title: '请选择专业！',
        icon: 'none'
      })
    } else if (this.data.selectArray[5] == 0) {
      wx.showToast({
        title: '请选择逻辑！',
        icon: 'none'
      })
    } else if (this.data.selectArray[6] == 0) {
      wx.showToast({
        title: '请选择性格！',
        icon: 'none'
      })
    } else if (this.data.selectArray[7] == 0) {
      wx.showToast({
        title: '请选择偏好！',
        icon: 'none'
      })
    } else if (this.data.selectArray[8] == 0) {
      wx.showToast({
        title: '请选择社交！',
        icon: 'none'
      })
    }else {
      wx.navigateTo({
        url: '../tjlist/index',
      })
    }

  }
})
