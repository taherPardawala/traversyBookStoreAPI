var myApp = angular.module('myApp', ['ngRouter']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'BooksController',
        termplateUrl: 'views/books.html'
    })
    .when('/books', {
        controller: 'BooksController',
        termplateUrl: 'views/books.html'
    })
    .when('/books/details/:id', {
        controller: 'BooksController',
        termplateUrl: 'views/book_details.html'
    })
    .when('/books/add', {
        controller: 'BooksController',
        termplateUrl: 'views/add_book.html'
    })
    .when('/books/edit/:id', {
        controller: 'BooksController',
        termplateUrl: 'views/edit_book.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});