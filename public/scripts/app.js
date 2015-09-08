$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $('.slider').slider({full_width: true});
});


var ulapp = angular.module('ulapp', ['ngRoute', 'ngAnimate']);

ulapp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
    
        templateUrl: 'views/home.html',
        controller: 'homectrl'
    })
    

    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'productsctrl'
    })
    
    .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'aboutusctrl'
    
    })
    
    .when('/contact', {
        templateUrl: 'views/contactus.html',
        controller: 'contactctrl'
    
    })
    
    .otherwise({ redirectTo: '/' });
});



