.controller('AppContrl', [

	'$scope','posts',

	function($scope){

		$scope.posts = posts.posts;
	

		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') { return; }
			if(!$scope.link || $scope.link === '') { return; }

		  	$scope.posts.push({

		  		title: $scope.title, 
		  		link: $scope.link,
		  		upvotes: 0,

		  	});



		  	$scope.title = '';
		  	$scope.link = '';

		};

		$scope.incrementUpvotes = function(post){

	  		post.upvotes += 1;

		};

}]);