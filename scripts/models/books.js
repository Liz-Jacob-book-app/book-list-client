'use strict';
var app = app || {};

//const API_URL = 'https://book-app-lj.herokuapp.com/api/v1';
const API_URL = 'https://localhost:3000';

(function(module){
    function Book(obj){
        this.book_id = obj.book_id,
        this.title = obj.title,
        this.author = obj.author,
        this.isbn = obj.isbn,
        this.image_url = obj.imageUrl,
        this.description = obj.description;
    }

    Book.all = [];

    Book.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/books/${ctx.params.book_id}`)
            .then(data => {
                ctx.book = new Book(data[0]);
                cb();
            })
            .fail(console.error);
    };

    Book.fetchAll = (cb) => {
        $.get(`${API_URL}`)
            .then(Book.loadAll)
            .then(cb);
    };
    Book.loadAll = (data) => {
        Book.all = data.map(obj => new Book(obj));
    };

    Book.prototype.toHtml = function () {
        const fillTemplate = Handlebars.compile($('#books-template').text());
        return fillTemplate(this);
    };

    Book.prototype.insertRecord = function(cb) {
        // REVIEW: Why can't we use an arrow function here for .insertRecord()?
        $.post(`${API_URL}/books/`, { title: this.title, author: this.author, isbn: this.isbn, authorUrl: this.imageUrl, body: this.description })
            .then(console.log)
            .then(cb);
    };

    Book.prototype.deleteRecord = (cb) => {
        $.ajax({
            url: `${API_URL}/books/${this.book_id}`,
            method: 'DELETE'
        })
            .then(console.log)
            .then(cb);
    };

    Book.prototype.updateRecord = (cb) => {
        $.ajax({
            url: `${API_URL}/books/${this.book_id}`,
            method: 'PUT',
            data: {
                title: this.title,
                author: this.author,
                isbn: this.isbn,
                imageUrl: this.imageUrl,
                description: this.description,
            }
        })
            .then(console.log)
            .then(cb);
    };

    module.Book = Book;
})(app);

//app.Book.fetchAll();