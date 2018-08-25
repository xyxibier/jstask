xyapp.controller('loginCtrl', function($scope,$state,$http) {
	$scope.loginbtn=function(){
		if($scope.user==undefined){
			$scope.tishi='请输入用户名';
		}else if($scope.pass==undefined){
			$scope.tishi='请输入密码';
		}else{						
			$http({
				method:'post',
				url:'/carrots-admin-ajax/a/login',
				data:'name='+$scope.user+'&pwd='+$scope.pass,
				headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).then(function(response) {
				if(response.data.code==0){
					sessionStorage.setItem('role',JSON.stringify(response.data.data.role.name));
					sessionStorage.setItem('username',JSON.stringify(response.data.data.manager.name));
					$state.go('backindex');
				}else{
					$scope.tishi=response.data.message;
				}
			},function(error) {
                console.log('数据获取异常，请检查相关设置');
            })
		}
	}				
})	