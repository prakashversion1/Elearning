angular.module('app').controller('mvMainCtrl', function($scope,mvCachedCourses){
	var courses = mvCachedCourses.query();
	console.log(courses);
	$scope.courses = courses;
});
