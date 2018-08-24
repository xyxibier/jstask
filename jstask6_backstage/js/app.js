
var xyapp=angular.module("xyapp", ["ui.router","ui.bootstrap",'angularFileUpload']);

xyapp.config(function($stateProvider,$urlRouterProvider){
	//声明主页面
	$urlRouterProvider.when('','/login')
	
	$stateProvider.state('login',{
		url: '/login',
    		templateUrl: "html/login.html",
    		controller:'loginCtrl'
	}).state('backindex',{
		url: '/backindex',
    		templateUrl: "html/backindex.html",
    		controller:'backCtrl'
	}).state('backindex.article',{
		url: '/article?page&type&status&startAt&endAt&author&title&size',	//url传参
    		templateUrl: "html/article.html",
    		controller:'artCtrl'
	}).state('backindex.articleadd',{
		url: '/articleadd?id',	
    		templateUrl: "html/articleadd.html",
    		controller:'addCtrl'
	}).state('backindex.welcome',{
		url: '/welcome',	
    		templateUrl: "html/welcome.html"
	})
})