'use strict'
var angular = require('angular');
require('style-loader!css-loader!./src/css/app.css');

// 初始化angular module
var app = angular.module("app", [require('angular-ui-router')]) 

// 定义路由
.config(["$stateProvider", "$urlRouterProvider",function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/page1");
  $stateProvider
        .state("page1", { 
          url: "/page1",
          template: require('html-loader!./src/html/page1.html')
        })
        .state("page2", { 
          url: "/page2",
          template: require('html-loader!./src/html/page2.html')
        })
    }
  ])

// 定义controller
.controller("page1Ctrl",function($scope){
	$scope.names = [1,2,3,4,5,6];
	$scope.click = function(){
		$scope.names.push(2);
	}
})

// 定义controller
.controller("page2Ctrl",function($scope){
	$scope.names = [1,2,3,4,5,6];
	$scope.click = function(){
		$scope.names.push(2);
	}
})
