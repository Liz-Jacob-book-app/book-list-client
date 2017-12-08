'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        // $('').hide();
        $('#books').empty().show();
        console.log(app.Book.all);
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    module.bookView = bookView;
})(app);