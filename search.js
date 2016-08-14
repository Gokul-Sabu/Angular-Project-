// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
	
	{
		"id": 1,
		"title": "Laptop",
		"image": "laptop.jpg",
		"price": 100000
	},
	{
		"id": 2,
		"title": "Mouse",
		"image": "2.jpg",
		"price": 100
	},
	{
		"id": 3,
		"title": "Kindle",
		"image": "3.jpg",
		"price": 560000
	},
	{
		"id": 4,
		"title": "Black Beauty",
		"image": "4.jpg",
		"price": 299
	},
	{
		"id": 5,
		"title": "Count Of Monte Cristo",
		"image": "5.jpg",
		"price": 1099
	},
	{
		"id": 6,
		"title": " Black Swan",
		"image": "6.jpg",
		"price": 499
	},
    { "id": 7,
		"title":"Game Of Thrones",
		"image": "7.jpg",
		"price":2399
	},
	{ "id" : 8,
		"title":"Shirts",
		"image":"8.jpg" ,
		"price": 500
	},
	{ "id" : 9,
		"title": "T-Shirts",
		"image":"9.jpg" ,
		"price": 100
	},
	{"id" : 10,
		"title":"Hats",
		"image":"10.jpg",
		"price":200
	}
]}
