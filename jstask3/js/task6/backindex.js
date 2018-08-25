xyapp.controller('backCtrl',function($scope,$state,$http,$sce){
	//构造判断登录函数
	$scope.login=function(){		
		
		if(JSON.parse(sessionStorage.getItem('role'))){
			//构建html
			$scope.iflogin="<span>{{role}}</span>|<span>{{username}}</span>|<span><a ng-click='loginout()'>退出</a></span>"
			$scope.iflogin = $sce.trustAsHtml($scope.iflogin);
		}else{	
			$scope.iflogin="<a ui-sref='login' style='margin-right:15px;'>登录</a>"
			$scope.iflogin = $sce.trustAsHtml($scope.iflogin);
		}	
	}
	
	//调用判断登录函数
	$scope.login();
			
	//用户角色
	$scope.role=JSON.parse(sessionStorage.getItem('role'));
	$scope.username=JSON.parse(sessionStorage.getItem('username'));	
	
	//退出清除数据
	$scope.loginout=function(){	
		sessionStorage.clear();
		if(confirm('确定退出登录？')){
			$state.go('login');
		}
	}
		
	//nav列表
	$scope.nav = nav;
	
	//状态保存
	$scope.isOpen = function(index) {
		console.log($scope.nav[index].menu.status)
		if ($scope.nav[index].menu.status) {
			switch (index) {
				case 0: window.sessionStorage.setItem('m1', '0');break;
				case 1: window.sessionStorage.setItem('m2', '0');break;
				case 2: window.sessionStorage.setItem('m3', '0');break;
			 } 
		}else {
			switch (index) {
				case 0: window.sessionStorage.setItem('m1', '1');break;
				case 1: window.sessionStorage.setItem('m2', '1');break;
				case 2: window.sessionStorage.setItem('m3', '1');break;
			} 
		}
	}
});
