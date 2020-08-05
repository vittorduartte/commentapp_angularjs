var app = angular.module("commentForm",[]);

app.controller("commentFormController", ($scope)=>{
    $scope.name = "";
    $scope.message = "";
    
    $scope.addComment = ()=>{
        $scope.comments.push({name:$scope.name,
                              message:$scope.message})
    }

    $scope.deleteComment = (index)=>{
        $scope.comments.splice(index, 1);
        
    }   

    $scope.comments = []
});
