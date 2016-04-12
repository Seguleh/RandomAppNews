angular.module('AdneomNews')

.controller('PostsContrl', [

	'$scope','posts','post',

	function($scope, post, posts){

		$scope.post = post;

		$scope.addComment = function() {

		  if($scope.body === '') { return; }
		  //if($scope.author === '') { return; }

		  posts.addComment(post.id, {

		    body: $scope.body,
		    author: 'Anon'
		    //author: $scope.author,

		  }).success(function(comment) {

		  	$scope.post.comments.push(comment);

		  });

		  $scope.body = '';
		  //$scope.author = '';

		};

		$scope.incrementUpvotes = function(comment){

		  posts.upvoteComment(post, comment);

		};
}]);