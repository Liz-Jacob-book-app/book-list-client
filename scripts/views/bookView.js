'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        $('main section').hide();
        $('#books').empty().show();
        console.log(app.Book.all);
        app.Book.all.map(book => $('#books').append(book.toHtml()));
    };

    bookView.initDetailPage = (ctx) => {
        $('main section').hide();
        $('#books').empty().show();
        $('#books').append(ctx.book.toHtml());
    };

    bookView.initUpdatePage = (ctx) => {
        $('main section').hide();
        $('#update-book').parent().show();

        $('#update-book input[name="author"]').val(ctx.book.author);

        $('#update-book').on('submit', function(){
            event.preventDefault();
            const updatedData = {
                author: $('#update-book input[name="author"].val()')
            };
            app.Book.update(ctx.book.id, updatedData);
        });
    };

    module.bookView = bookView;
})(app);