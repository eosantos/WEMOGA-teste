var app = angular.module('App', []);

app.controller('Filmes', function ($scope, $http) {

  $scope.carregaFilmes = function () {
    $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1').then(function (res) {
			$scope.listaFilmes = res.data.results;
			console.log($scope.listaFilmes);
		});
	}

});
