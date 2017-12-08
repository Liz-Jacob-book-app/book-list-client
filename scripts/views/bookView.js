'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        // $('').hide();
        $('#books').empty().show();
        app.Book.all.map(book => $('books').append(book.toHtml()));
    };

    module.bookView = bookView;
})(app);