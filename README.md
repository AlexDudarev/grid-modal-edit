grid-modal-edit
===============

This is simple angular directive (based on ng-grid and angular-strap) that provide simple grid with edit records in
modal window.

Start:

Options:

Example of object with options:

```
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
    }

```

getData - method that get data from server with next parameters
          pageSize - size of page,
          page - number of requested page,
          searchText - search string filter

pageOptions, filterOptions, columns - similar to ng-grid

modelMetaData - array of objects according to which modal window is creating.

```
var modelMetaData = [
    {
        label: 'Name',
        field: 'name',
        type: 'text',
        placeholder : 'Enter Name'
    },{
        label: 'Description',
        field: 'description',
        type: 'text'
    },{
        label: 'Registered',
        field: 'registered',
        type: 'checkbox',
        options: [{value: 'false', text: 'True'},{value: 'false', text: 'False'}]
    }
];

```

Each object of MetaData may contain next fields:

         label: 'Name' - string for label
         field: 'name' - field from data
         type: 'text' - type of input in which edit
         placeholder : 'Enter Name' - placeholder
         options : [] - array with option, for select for example.

