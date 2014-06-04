/// <reference path="../plugins/ng-grid-reorderable.js" />
/// <reference path="../ng-grid-1.0.0.debug.js" />
'use strict';

appModule.controller('modelController', [ '$scope', 'DataFactory',
    function ($scope, DataFactory) {
        $scope.modelOptions = {
            getData: DataFactory.getData,

            pagingOptions: {
                pageSizes: [25, 50, 100], //page Sizes
                pageSize: 25, //Size of Paging data
                currentPage: 1 //what page they are currently on
            },

            filterOptions: {
                filterText: '',
                useExternalFilter: false
            },

            modalMetaData: modelMetaData,

            columns: [
                { field: 'name', displayName: 'Very Long Name Title', sortable: false},
                { field: 'allowance',
                    width: 120,
                    aggLabelFilter: 'currency',
                    cellTemplate: '<div ng-class="{red: row.entity[col.field] > 30}"><div class="ngCellText">{{row.entity[col.field] | currency}}</div></div>'
                },
                { field: 'birthday', width: '120px', cellFilter: 'date', resizable: false, visible: false }
            ]
        };
    }]);