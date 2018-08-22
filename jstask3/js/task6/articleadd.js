
xyapp.controller('addCtrl', function($scope,$http,$state,FileUploader) {
		
	//判断是不是编辑
	var editLists = JSON.parse(window.sessionStorage.getItem('edit'));
	if (editLists != null) {		
		$scope.modelAddId = editLists.id;
		$scope.modelAddTitle = editLists.title;
		$scope.modelAddType = editLists.type;
		$scope.modelAddIndustry = editLists.industry;
		$scope.modelAddStatus = editLists.status;
		$scope.modelAddContent = editLists.content;
		$('#summernote').summernote('code', $scope.modelAddContent);		//富文本赋值
		$scope.modelAddUrl = editLists.url;
		$scope.modelAddImg = editLists.img;   
		$scope.modelAddCreateAt = editLists.createAt;
	}

	$scope.types = addtypes; 			//添加类型	
	$scope.industry = addindustry; 		//行业大图
	
	//行业大图显示
	$scope.showSelect=function(){
		return ($scope.modelAddType==3)?true:false;
	}
	
	//状态判断
	$scope.online=function(){
		$scope.modelAddStatus=2;
	}
	
	$scope.offline=function(){
		$scope.modelAddStatus=1;
	}
	
	//时间
	$scope.modelAddCreateAt=new Date().valueOf();
	
	//富文本初始化
	$('#summernote').summernote({
		lang: 'zh-CN',
		height: 200
	});
		
	//图片上传功能设置
	var uploader=$scope.uploader=new FileUploader();
    uploader.url='/carrots-admin-ajax/a/u/img/task';  
    uploader.queue=[];
    
    //上传完成后回调
	uploader.onCompleteItem = function(fileItem, response) {
		console.info('onCompleteItem', fileItem, response);
		$scope.modelAddImg=response.data.url;
	};
	
	//删除图片后清除信息
	$scope.hideImg=function(){
		$scope.modelAddImg = null;	
		$('#hideimg').hide();
		$('#uploadbtn').css('margin-bottom','20px');
	}
	
	//点击上传时显示预览图
	$scope.showImg=function(){
		$('#hideimg').show();
	}
	
	//提交按钮
	$scope.submitAdd=function(id){
		
		//获取富文本的值	
		$scope.modelAddContent=$('#summernote').summernote('code');
		
		//编辑和添加的判断
		if (editLists != null){	
			$http({
				method: 'PUT',
				url: '/carrots-admin-ajax/a/u/article/'+id,
				params: {
					title: $scope.modelAddTitle,
					type: $scope.modelAddType,
					industry: $scope.modelAddIndustry,
					status: $scope.modelAddStatus,
					content: $scope.modelAddContent,
					url: $scope.modelAddUrl,
					img: $scope.modelAddImg,
					createAt: $scope.modelAddCreateAt,
				}
			}).then(function(response) {
				if(response.data.code == 0) {
					console.log("编辑系统正常");
					$state.go('backindex.article');
				}else{
					console.log("编辑系统错误");
				}
			}, function(error) {
				console.log('编辑系统异常，请检查相关设置');
			})
		}else{
			$http({
				method: 'POST',
				url: '/carrots-admin-ajax/a/u/article',
				params: {
					title: $scope.modelAddTitle,
					type: $scope.modelAddType,
					industry: $scope.modelAddIndustry,
					status: $scope.modelAddStatus,
					content: $scope.modelAddContent,
					url: $scope.modelAddUrl,
					img: $scope.modelAddImg,
					createAt: $scope.modelAddCreateAt,
				}
			}).then(function(response) {				
				console.log(response)
				if(response.data.code == 0) {
					console.log("新增系统正常");
					$state.go('backindex.article');
				}else{
					console.log("新增系统错误");
				}
			}, function(error) {
				console.log('新增系统异常，请检查相关设置');
			})			
		}
	}
	
	//取消新增
	$scope.clearAdd=function(){
		$state.go('backindex.article');
	}
})