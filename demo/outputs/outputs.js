/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("OutputsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
          "Available Outputs": [
            {
              "type": "container",
              "label": "Food",
              "columns": [
                [
                  {
                    "type": "container",
                    "label": "Fruit",
                    "columns": [
                      [
                        {
                          "type": "item",
                          "label": "Apple",
                          "id": "apple"
                        },
                        {
                          "type": "item",
                          "label": "Banana",
                          "id": "banana"
                        }
                      ],
                      [
                        {
                          "type": "item",
                          "label": "Orange",
                          "id": "orange"
                        }
                      ]
                    ]
                  },
                  {
                    "type": "container",
                    "label": "Veg",
                    "columns": [
                      [
                        {
                          "type": "item",
                          "label": "Carrot",
                          "id": "carrot"
                        }
                      ],
                      [
                        {
                          "type": "item",
                          "label": "Rhubarb",
                          "id": "rhubarb"
                        }
                      ]
                    ]
                  }
                ],
                [
                  {
                    "type": "container",
                    "label": "Chocolate",
                    "columns": [
                      [
                        {
                          "type": "item",
                          "label": "Dark Chocolate",
                          "id": "dark_chocolate"
                        }
                      ],
                      [
                        {
                          "type": "item",
                          "label": "Milk Chocolate",
                          "id": "milk_chocolate"
                        }
                      ]
                    ]
                  },
                  {
                    "type": "container",
                    "label": "Cakes",
                    "columns": [
                      [
                        {
                          "type": "item",
                          "label": "Carrot Cake",
                          "id": "carrot_cake"
                        },
                        {
                          "type": "item",
                          "label": "Brownie",
                          "id": "brownie"
                        }
                      ],
                      [
                        {
                          "type": "item",
                          "label": "Banana Bread",
                          "id": "banana_bread"
                        }
                      ]
                    ]
                  }
                ]
              ]
            },
            {
              "type": "container",
              "label": "Drinks",
              "columns": [
                [
                  {
                    "type": "item",
                    "label": "Coffee",
                    "id": "coffee"
                  },
                  {
                    "type": "item",
                    "label": "Tea",
                    "id": "tea"
                  }
                ],
                [
                  {
                    "type": "item",
                    "label": "Water",
                    "id": "water"
                  },
                  {
                    "type": "item",
                    "label": "Juice",
                    "id": "juice"
                  }
                ]
              ]
            }
          ],
          "Selected Outputs": []
        }

    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
