angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1.Hello World', id: 1 },
    { title: '2', id: 2 },
    { title: '3', id: 3 },
    { title: '4', id: 4 },
    { title: '5', id: 5 },
    { title: '6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
