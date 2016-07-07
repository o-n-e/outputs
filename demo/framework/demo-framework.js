angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/outputs', {
                templateUrl: 'outputs/outputs-frame.html',
                controller: 'OutputsDemoController'
            })
            .otherwise({redirectTo: '/outputs'});
    })

    .directive('navigation', function($rootScope, $location) {
        return {
            template: '<li ng-repeat="option in options" ng-class="{active: isActive(option)}">' +
                      '    <a ng-href="{{option.href}}">{{option.label}}</a>' +
                      '</li>',
            link: function (scope, element, attr) {
                scope.options = [
                    {label: "Outputs", href: "#/outputs"},
                ];

                scope.isActive = function(option) {
                    return option.href.indexOf(scope.location) === 1;
                };

                $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
                    scope.location = $location.path();
                });
            }
        };
    });
