//后台列表
var nav=[
	{
		'menu':{'name':'信息管理'},
		'submenu':[{'name':'公司信息','sref':'backindex.welcome'},{'name':'职位信息','sref':'backindex.work'}]
	},{
		'menu':{'name':'内容管理'},
		'submenu':[{'name':'Article管理','sref':'backindex.article'}]
	},{
		'menu':{'name':'后台管理'},
		'submenu':[{'name':'账号管理','sref':'backindex.user'},{'name':'密码修改','sref':'backindex.password'}]		
	}
];
	
//类型
var mytype=[
	{'id': null,'name': "全部"},
	{'id': 0,'name': "首页banner"},
	{'id': 1,'name': "找职位banner"},
	{'id': 2,'name': "找精英banner"},
	{'id': 3,'name': "行业大图"}
];

//状态
var mystatus=[
	{'id': null,'name': "全部"},
	{'id': 1,'name': "草稿"},
	{'id': 2,'name': "上线"}
];

//添加类型
var addtypes=[
	{'id': 0,'name': "首页banner"},
	{'id': 1,'name': "找职位banner"},
	{'id': 2,'name': "找精英banner"},
	{'id': 3,'name': "行业大图"}
];

//行业大图
var addindustry=[
	{'id': 0,'name': "移动互联网"},
	{'id': 1,'name': "电子商务"},
	{'id': 2,'name': "企业服务"},
	{'id': 3,'name': "O2O"},
	{'id': 4,'name': "教育"},
	{'id': 5,'name': "金融"},
	{'id': 6,'name': "游戏"}
];