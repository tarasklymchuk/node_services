/**
 * set url api application
 *
 * @type {string}
 */
const $url = 'http://192.168.10.10:3000/';
/**
 * init angular module
 *
 * @type {angular.Module}
 */
var app = angular.module('app', ['angularUtils.directives.dirPagination', 'ae-datetimepicker']);
/**
 * init angular controller
 */
app.controller('TableController', ['$http', '$scope', function ($http, $scope) {
    /**
     * get all people
     */
    $scope.getAllPeople = function () {
        $scope.hideProfile = true;
        $http({
            method: 'GET',
            url: $url
        }).then(function (res) {
            $scope.users = res.data;
        });
    };
    $scope.getAllPeople();

    /**
     * new user entity
     *
     * @type {{}}
     */
    $scope.new = {};

    /**
     * update user entity
     *
     * @param $user
     * @returns {{fio: *, bd: *, salary: *, work_area: *, start_date: *}}
     */
    $scope.updateEntity = function ($user) {
        update = {};
        user = $scope.entity;
        update.fio = user.fio ? user.fio : $user.fio;
        update.bd = user.bd ? user.bd : $user.bd;
        update.salary = user.salary ? user.salary : $user.salary;
        update.work_area = user.work_area ? user.work_area : $user.work_area;
        update.start_date = user.start_date ? user.start_date : $user.start_date;
        return update;
    };
    /**
     * edit user entity
     *
     * @type {{}}
     */
    $scope.entity = {};

    /**
     *  open modal window to create new user
     */
    $scope.newUser = function () {
        $('.add').modal('show');
    };

    /**
     * update action
     *
     * @param $user
     */
    $scope.update = function ($user) {
        $http({
            method: 'PUT',
            url: $url + 'staff/' + $user._id,
            dataType: 'json',
            data: $scope.updateEntity($user)
        }).then(function (res) {
            $scope.getAllPeople();
            $('.edit').modal('hide');
            swal(
                'Update suucessfully!',
                'User ' + $user.fio + ' update!',
                'success'
            );

        });
    };

    /**
     * save action
     */
    $scope.save = function (newEntity) {
        $http({
            method: 'POST',
            url: $url,
            dataType: 'json',
            data: $scope.new
        }).then(function (res) {
            $scope.getAllPeople();
            if (!res.data.errors) {
                swal("Success", "New Users succesfully create!", "success");
                $('form#add').closest('form').find("input").val("");
                return $('.add').modal('hide');
            }
            swal("Failure", "New Users not create! All field is required!", "warning");
        });
    };

    /**
     * delete specified user
     *
     * @param user
     */
    $scope.delete = function (user) {
        $scope.hideProfile = true;
        swal({
            title: 'Are you sure?',
            text: "You won't " + user.fio + " delete?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            $http({
                method: 'DELETE',
                url: $url + 'staff/' + user._id
            }).then(function (res) {
                $scope.getAllPeople();
                swal(
                    'Deleted!',
                    res.data.message,
                    'success'
                );
            });

        })
    };

    /**
     * view user
     * @param user
     */
    $scope.view = function (user) {
        $scope.hideProfile = false;
        $('#profile').removeClass('hidden');
        $scope.staff = user;
    };

    /**
     * edit modal window
     * @param user
     */
    $scope.edit = function (user) {
        $scope.people = user;
        $('.edit').modal('show');
    };
    /**
     * sorting
     * @param keyname
     */
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    /**
     * hide detail user info
     */
    $scope.hideProfileInfo = function () {
        $scope.hideProfile = true;
    }
}]);