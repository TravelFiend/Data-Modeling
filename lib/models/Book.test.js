const Book = require('./Book');

describe('Book model', () => {
    describe('author', () => {
        it('requires an author', () => {
            const book = new Book({
                title: 'Great Tales of Horror',
                category: 'Horror Fiction',
                totalPages: 600,
                price: 5
            });

            const { errors } = book.validateSync();
            expect(errors.author.message).toEqual('Path `author` is required.');
        });
    });

    describe('title', () => {
        it('requires a title', () => {
            const book = new Book({
                author: 'H.P. Lovecraft',
                category: 'Horror Fiction',
                totalPages: 600,
                price: 5
            });

            const { errors } = book.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });

    describe('category', () => {
        it('requires a category', () => {
            const book = new Book({
                author: 'H.P. Lovecraft',
                title: 'Great Tales of Horror',
                totalPages: 600,
                price: 5
            });

            const { errors } = book.validateSync();
            expect(errors.category.message).toEqual('Path `category` is required.');
        });
    });

    describe('totalPages', () => {
        it('is over 0', () => {
            const book = new Book({
                author: 'H.P. Lovecraft',
                title: 'Great Tales of Horror',
                category: 'Horror Fiction',
                totalPages: 0,
                price: 5
            });

            const { errors } = book.validateSync();
            expect(errors.totalPages.message).toEqual('Path `totalPages` (0) is less than minimum allowed value (1).');
        });
    });

    describe('price', () => {
        it('requires a price field', () => {
            const book = new Book({
                author: 'H.P. Lovecraft',
                title: 'Great Tales of Horror',
                category: 'Horror Fiction',
                totalPages: 600,
            });

            const { errors } = book.validateSync();
            expect(errors.price.message).toEqual('Path `price` is required.');
        });

        it('is over -1', () => {
            const book = new Book({
                author: 'H.P. Lovecraft',
                title: 'Great Tales of Horror',
                category: 'Horror Fiction',
                totalPages: 600,
                price: -1
            });

            const { errors } = book.validateSync();
            expect(errors.price.message).toEqual('Path `price` (-1) is less than minimum allowed value (0).');
        });
    });
});
