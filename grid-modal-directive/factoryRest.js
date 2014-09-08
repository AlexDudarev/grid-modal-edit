
gridmodalModule.factory('RestFactory', [ 'Restangular', function (Restangular) {
    var collectionName = '';
    var restFactory = {};
    var originalObject = null,
        modifyingObject = null;
    restFactory.setCollectionName = function (name) {
        collectionName = name;
    }

    restFactory.getCollection =  function (callback) {
        return Restangular.all(collectionName).getList().then(callback);
    }


    restFactory.create = function(newProject, callback) {
        Restangular.all(collectionName).post(newProject).then(callback);
    }

    restFactory.isClean = function() {
        return angular.equals(originalObject, modifyingObject);
    }

    restFactory.destroy = function() {
        originalObject.remove().then(function() {
        });
    };

    restFactory.save = function() {
        modifyingObject.put().then(function() {
        });
    };

    restFactory.initEdit = function (original) {
        modifyingObject = Restangular.copy(original);
        originalObject = original;
    }
    return restFactory;
}]);
