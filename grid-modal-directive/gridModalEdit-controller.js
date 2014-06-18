/// <reference path="../plugins/ng-grid-reorderable.js" />
/// <reference path="../ng-grid-1.0.0.debug.js" />
var gridmodalModule = angular.module('GridModalDirective', ['restangular']);

var plugins = {};

gridmodalModule.controller('gridModalEditController', [ '$scope', '$modal', 'RestFactory',
    function ($scope, $modal, RestFactory) {
        var self = this;
        var modalOptions = $scope.modalOptions;
        var restOptions = $scope.restOptions;
        $('body').layout({
            applyDemoStyles: true,
            center__onresize: function (x, ui) {
                // may be called EITHER from layout-pane.onresize OR tabs.show
                plugins.ngGridLayoutPlugin.updateGridLayout();
            }
        });
        plugins.ngGridLayoutPlugin = new ngGridLayoutPlugin();
        $scope.data = [];
        $scope.modalMetaData = modalOptions.modalMetaData;
        $scope.editingRow = null;
        $scope.editingRowCopy = null;
        $scope.totalServerItems = 0;

        $scope.pagingOptions = modalOptions.pagingOptions;
        $scope.filterOptions = modalOptions.filterOptions;

        $scope.modal = $modal({
            scope: $scope,
            template: 'grid-modal-directive/modal.html',
            show: false
        });

        if (modalOptions.useRest) {
            RestFactory.setCollectionName(restOptions.collectionName);
            self.getPagedDataAsync = function (pageSize, page, searchText) {
                RestFactory.getCollection(function (result) {
                    $scope.data = result;
                    $scope.totalServerItems = result.length;
                });
            };
        } else {
            self.getPagedDataAsync = function (pageSize, page, searchText) {
                setTimeout(function () {
                    modalOptions.getData(pageSize, page, searchText, function (pagedData, data) {
                            $scope.data = pagedData;
                            $scope.totalServerItems = data.length;
                            if (!$scope.$$phase) {
                                $scope.$apply();
                            }
                        }
                    );
                }, 100);
            };
        }

        $scope.columns = modalOptions.columns;
        $scope.columns.push({ field: 'paid', width: '*', cellFilter: 'checkmark', enableCellEdit: false, cellTemplate: '<div class="ngCellText"><a class="btn" ng-click="EditRow($event,row.entity)">Edit</a></div>' });


        $scope.$watch('pagingOptions', function () {
            self.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }, true);

        $scope.$watch('filterOptions', function () {
            self.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }, true);

        self.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

        $scope.gridOptions = {
            data: 'data',
            jqueryUITheme: false,
            jqueryUIDraggable: false,
            //showSelectionCheckbox: true,
            multiSelect: false,
            showGroupPanel: false,
            showColumnMenu: true,
            //enableCellSelection: true,
            //enableCellEditOnFocus: true,
            plugins: [plugins.ngGridLayoutPlugin],
            enablePaging: true,
            showFooter: true,
            totalServerItems: 'totalServerItems',
            filterOptions: $scope.filterOptions,
            pagingOptions: $scope.pagingOptions,
            columnDefs: $scope.columns
        };


        $scope.editRow = function (event, row) {
            $scope.editingRow = row;
            $scope.editingRowCopy = angular.copy(row);
            $scope.modal.show();
        };

        $scope.saveRow = function () {
            for (var key in $scope.editingRowCopy) {
                if ($scope.editingRowCopy.hasOwnProperty(key)) {
                    $scope.editingRow[key] = $scope.editingRowCopy[key];
                }
            }
            $scope.modal.hide();
        };
    }]);