var appModule =  angular.module('AppModule', []);

appModule.factory('DataFactory', function () {
    var DataFactory = {
        getData: function (pageSize, page, searchText, callback) {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                data = largeLoad().filter(function (item) {
                    return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                });
            } else {
                data = largeLoad();
            }
            var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
            callback(pagedData,data.length);
        }
    }
    return DataFactory;
});
