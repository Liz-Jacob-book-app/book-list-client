function(module
    )
    function Book

    Book.all = [];

    Book.fetchAll = () => {
        $.get('heroku api')
            .done('to do with it')
    }

    module.Book = Book;

(function(module){
    function Book = 
})