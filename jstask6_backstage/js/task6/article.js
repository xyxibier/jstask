xyapp.controller('artCtrl', function($scope, $http, $stateParams, $state, $filter) {

	$scope.mytype = mytype; 					//类型
	$scope.modelType = $scope.mytype[0]; 	//设置类型初始值
	$scope.mystatus = mystatus; 				//状态
	$scope.modelStatus = $scope.mystatus[0]; //设置状态初始值

	//日历插件
	$scope.format = "yyyy/MM/dd";
	//起始日期日历
	$scope.modelDateFrom = new Date();
	//判断起始日期是否设置
	$scope.modelDateFrom = ($stateParams.startAt == undefined) ? '' : parseInt($stateParams.startAt);

	$scope.popup1 = {
		opened: false
	};
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};
	//终止日期日历
	$scope.modelDateTo = new Date();
	//判断终止日期是否设置
	$scope.modelDateTo = ($stateParams.endAt == undefined || '86400000') ? '' : parseInt($stateParams.endAt) - 86400000;
	$scope.popup2 = {
		opened: false
	};
	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};

	//请求文章列表	
	$http({
		method: 'GET',
		url: '/carrots-admin-ajax/a/article/search',
		params: {
			page: $stateParams.page,
			size: $stateParams.size,
			title: $stateParams.title,
			author: $stateParams.author,
			type: $stateParams.type,
			status: $stateParams.status,
			startAt: $stateParams.startAt,
			endAt: $stateParams.endAt
		}
	}).then(function(response) {
		if(response.data.code == 0) {
			$scope.lists = response.data.data.articleList; //文章列表
			$scope.totalItems = response.data.data.total; //总共有多少条数据	
			$scope.itemsPerPage = response.data.data.size; //每页显示的数量
			$scope.currentPage = $stateParams.page; //当前页
		}
	}, function(error) {
		console.log('数据获取异常，请检查相关设置');
	})

	$scope.maxSize = 2; //可选择的页数范围

	//翻页
	$scope.pageChange = function() {
		$state.go('backindex.article', {
			page: $scope.currentPage
		}, {
			reload: true,
		})
	}

	//每页显示条数
	$scope.pageSize = function() {
		if($scope.pagesize) {
			$state.go('backindex.article', {
				page: 1,
				size: $scope.pagesize
			}, {
				reload: true,
			})
		} else {
			alert('请输入条数')
		}
	}

	//去第几页
	$scope.goPage = function() {
		if($scope.gopage) {
			$state.go('backindex.article', {
				page: $scope.gopage
			}, {
				reload: true,
			})
		} else {
			alert('请输入页码')
		}
	}

	//搜索
	$scope.pageSearch = function() {
		$state.go('backindex.article', {
			page: 1,
			title: $scope.modelTitle,
			author: $scope.modelAuthor,
			type: $scope.modelType,
			status: $scope.modelStatus,
			startAt: $scope.modelDateFrom.valueOf(),
			endAt: $scope.modelDateTo == '' ? '' : $scope.modelDateTo.valueOf() + 86400000,
		}, {
			reload: true,
		})
	}

	//数据保存	
	let ifNull = function(e) {
		return(e == null) ? null : parseInt(e)
	}
	$scope.modelTitle = $stateParams.title;
	$scope.modelAuthor = $stateParams.author;
	$scope.modelType = ifNull($stateParams.type);
	$scope.modelStatus = ifNull($stateParams.status);
	($stateParams.endAt == null) ? null: ($scope.modelDateTo = parseInt($stateParams.endAt) - 86399000);

	//重置
	$scope.resetSearch = function() {
		$state.go('backindex.article', {
			page: 1,
			size:10,
			title: null,
			author: null,
			type: null,
			status: null,
			startAt: null,
			endAt: null,			
		}, {
			reload: true,
		})
	}

	//上下线按钮
	$scope.lineStatus=function(x){
		return (x.status == 2)?'下线':'上线';
	}
	//上下线操作	
	$scope.offline = function(x) {
		bootbox.confirm({
			size: "small",
			title: (x.status == 2) ? '确认下线？' : '确认上线？',
			message: (x.status == 2) ? '下线后会存为草稿' : '上线后会显示在轮播图中',
			buttons: {
				confirm: {
					label: '确认',
					className: 'red'
				},
				cancel: {
					label: '取消'
				}
			},
			callback: function(result) {
				if(result){
					x.status=(x.status==2)?1:2;
					$http({
						method: 'PUT',
						url: '/carrots-admin-ajax/a/u/article/status',
						params: {
							id: x.id,
							status: x.status
						}
					}).then(function(response) {
						if(response.data.code == 0) {
							$state.reload('backindex.article');
						}
					}, function(error) {
						console.log('上下线系统异常，请检查相关设置');
					})
				}else{
					console.log('已取消')
				}
			}
		})
	}
	
	//删除
	$scope.deletelist = function(x) {
		bootbox.confirm({
			size: "small",
			title: "确认删除",
			message: "删除后将不可恢复",
			buttons: {
				confirm: {
					label: '确认',
					className: 'red'
				},
				cancel: {
					label: '取消'
				}
			},
			callback: function(result) {
				if(result){					
					$http({
						method: 'DELETE',
						url: '/carrots-admin-ajax/a/u/article/'+x.id
					}).then(function(response) {
						if(response.data.code == 0) {
							$state.reload('backindex.article');
						}
					}, function(error) {
						console.log('删除系统异常，请检查相关设置');
					})
				}else{
					console.log('已取消')
				}
			}
		})
	}
	
	//编辑文章页
	$scope.editArt=function(x){
		$http({
			method: 'GET',
			url: '/carrots-admin-ajax/a/article/'+x.id
		}).then(function(response) {
			if(response.data.code == 0) {
				console.log("编辑系统正常");
				window.sessionStorage.setItem('edit', JSON.stringify(response.data.data.article));
				$state.go('backindex.articleadd',{
					id:x.id
				});
			}else{
				console.log("编辑系统错误");
			}
		}, function(error) {
			console.log('编辑系统异常，请检查相关设置');
		})		
	}
	
	//新增文章页
	$scope.addNew=function(){
		window.sessionStorage.removeItem('edit');
		$state.go('backindex.articleadd');
	}
	
})