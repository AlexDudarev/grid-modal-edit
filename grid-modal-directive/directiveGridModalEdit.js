gridmodalModule.directive('gridModalEdit', function () {
    return{
        template: '<div style="position: absolute;  left: 0; right: 0; top: 0; bottom: 0; overflow: hidden" ng-grid="gridOptions"></div>',
        // or
        // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
        restrict: 'E',
        scope: {
            modalOptions: '=gridModalOptions',
            restOptions: '='
        },
        controller: 'gridModalEditController'
    };
});
