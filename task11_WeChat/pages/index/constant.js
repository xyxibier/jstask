var score = [
  {
    option: [
      {1: -1000,2: 10,3: -50,4: -50,5: -100,6: -50,7: 30,8: 50,9: 50, 10: -1000, 11: -1000,12: 30,name: '初中以下'},
      {1: -1000,2: 20,3: 0,4: 0,5: -50,6: 10,7: 30,8: 50,9: 50,10: -1000,11: -1000,12: 30,name: '高中'},
      {1: -1000,2: 30,3: 30,4: 30,5: 30,6: 30,7: 30,8: 30,9: 50,10: -1000,11: -1000,12: 30,name: '大专'},
      {1: -1000,2: 30,3: 40,4: 40,5: 40,6: 40,7: 40,8: 40,9: 30, 10: -1000, 11: -1000,12: 40,name: '本科'},
      {1: -1000,2: 30,3: 50,4: 40,5: 50,6: 30,7: 50,8: 30,9: -30,10: -1000,11: -1000,12: 50,name: '硕士'},
      {1: -1000,2: 30,3: 50,4: 40,5: 50,6: 30,7: 50,8: 30,9: -30,10: -1000,11: -1000,12: 50,name: '博士'}
    ],
    name: '学　　历：'
  },
  {
    option: [
      {1: -1000,2: 50,3: 50,4: 50,5: 50,6: 50,7: 50,8: 30,9: 30, 10: -1000, 11: -1000,12: 30,name: '男'},
      {1: -1000,2: 50,3: 30,4: 30,5: 10,6: -30,7: 50,8: 50,9: 50,10: -1000,11: -1000,12: 50,name: '女'}
    ],
    name: '性　　别：'
  },
  {
    option: [
      {1: -1000,2: 5,3: 0,4: 0,5: -50,6: 15,7: 20,8: 30,9: 50,10: -1000,11: -1000,12: 20,name: '18岁以下'},
      {1: -1000,2: 20,3: 20,4: 20,5: 20,6: 20,7: 20,8: 20,9: 20,10: -1000,11: -1000,12: 20,name: '18~24岁'},
      {1: -1000,2: 20,3: 20,4: 20,5: 20,6: 20,7: 20,8: 20,9: 20, 10: -1000, 11: -1000,12: 20,name: '25~30岁'},
      {1: -1000,2: -30,3: -30,4: -30,5: -30,6: -30,7: 50,8: 0,9: 0,10: -1000,11: -1000,12: 50,name: '30岁以上'}
    ],
    name: '年　　龄：'
  },
  {
    option: [
      {1: -1000,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: -1000,11: -1000,12: 0,name: '无特长'},
      {1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 50, 9: 0, 10: -1000, 11: -1000, 12: 30, name: '绘画基础' },
      {1: -1000,2: 10,3: 10,4: 10,5: 10,6: 50,7: 0,8: 0,9: 10,10: -1000,11: -1000,12: 0,name: '网络相关'},
      {1: -1000,2: 0,3: 0,4: 0,5: 0,6: 0,7: 50,8: 30,9: 10,10: -1000,11: -1000,12: 30,name: '原型设计'},
      {1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 30, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 50, name: '文字功底' }
    ],
    name: '特　　长：'
  },
  {
    option: [
      {1: -1000,2: 30,3: 0,4: 0,5: 0,6: 0,7: 30,8: 50,9: 50,10: -1000,11: -1000,12: 30,name: '无专业'},
      {1: -1000,2: 35,3: 35,4: 35,5: 50,6: 40,7: 40,8: 40,9: 30,10: -1000,11: -1000,12: 40,name: '计算机相关'},
      {1: -1000,2: 30,3: 35,4: 35,5: 40,6: 30,7: 30,8: 30,9: 30,12: 30,10: -1000,11: -1000,name: '理工科'},
      {1: -1000,2: 10,3: 10,4: 10,5: 10,6: 10,7: 50,8: 50,9: 30,10: -1000,11: -1000,12: 50,name: '文科'}
    ],
    name: '专　　业：'
  },
  {
    option: [
      {1: -1000,2: 40,3: 10,4: 10,5: 10,6: 10,7: 20,8: 50,9: 50,10: -1000,11: -1000,12: 20,name: '渣渣'},
      {1: -1000,2: 30,3: 30,4: 30,5: 30,6: 30,7: 30,8: 30,9: 30,10: -1000,11: -1000,12: 30,name: '普通'},
      {1: -1000,2: 40,3: 40,4: 40,5: 50,6: 40,7: 30,8: 0,9: 0,10: -1000,11: -1000,12: 30,name: '卓越'}
    ],
    name: '逻　　辑：'
  },
  {
    option: [
      {1: -1000,2: 50,3: 50,4: 50,5: 50,6: 50,7: -10,8: 0,9: 0,10: -1000,11: -1000,12: -10,name: '沉默寡言'},
      {1: -1000,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: -1000,11: -1000,12: 0,name: '中规中矩'},
      {1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, 9: 0, 10: -1000, 11: -1000, 12: 50, name: '开朗活泼' }
    ],
    name: '性　　格：'
  },
  {
    option: [
      {1: -1000,2: 50,3: 40,4: 40,5: 40,6: 0,7: 30,8: 30,9: 20,10: -1000,11: -1000,12: 30,name: '所见即所得'},
      {1: -1000,2: 30,3: 30,4: 30,5: 30,6: 30,7: 30,8: 30,9: 30,10: -1000,11: -1000,12: 30,name: '抽象推理'}
    ],
    name: '偏　　好：'
  },
  {
    option: [
      {1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 0, 9: 50, 10: -1000, 11: -1000, 12: 50, name: '喜欢' },
      {1: -1000,2: 50,3: 50,4: 50,5: 50,6: 50,7: -30,8: 50,9: 0,10: -1000,11: -1000,12: -30,name: '不喜欢',}
    ],
    name: '社　　交：'
  }
]

var baseScore = { 1: -1000, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1 };