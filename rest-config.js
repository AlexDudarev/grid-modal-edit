
appModule.config( function (RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000/db');

    RestangularProvider.setRequestInterceptor(function(elem, operation, what) {

        if (operation === 'put') {
            elem._id = undefined;
            return elem;
        }
        return elem;
    })
});