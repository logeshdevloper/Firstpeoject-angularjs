var app = angular.module('myapp', []);
app.controller('gitupctrl', function ($scope, $http, $sce) {
$scope.github =[];
$scope.show_result = false;
$scope.sumbitbtn = function(){
    var name =$("#inputText").val();
    console.log(name);
    $('.tempContntLoader').removeClass('d-none');
    $scope.show_result = true;
    $http.get('https://api.github.com/users/'+ name +'/repos').then(function(res){
        $scope.github = res.data;
        setTimeout(function(){
            $('.tempContntLoader').addClass('d-none');
        },1000)
    });
};

$scope.backbtn = function(){
    $scope.show_result = false;
};
});