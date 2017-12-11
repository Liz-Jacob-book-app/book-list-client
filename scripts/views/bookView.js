'use strict';

var app = app || {};

(function (module){
    const bookView = {};

    bookView.initIndexPage = () => {
        // $('#add').hide();
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

    bookView.initNewPage = (ctx) => {
        event.preventDefault();
        $('main section').hide();
        $('#add').show();

        $('#add').on('submit', function(){
            event.preventDefault();
            console.log('asdfs');
            const newBook = {
                title: $('#title').val(),
                author: $('#author').val(),
                isbn: $('#isbn').val(),
                imageUrl: $('#image_url').val(),
                description: $('#description').val()
            };
            console.log(newBook);
            app.Book.create(newBook);
        });

        // $('#update-book input[name="author"]').val(ctx.book.author);

        // $('#update-book').on('submit', function(){
        //     event.preventDefault();
        //     const updatedData = {
        //         author: $('#update-book input[name="author"].val()')
        //     };
        //     app.Book.update(ctx.book.id, updatedData);
        // });
    };

    module.bookView = bookView;
})(app);