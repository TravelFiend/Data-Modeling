const Album = require('./Album');

describe('Album model', () => {
    describe('artist', () => {
        it('requires an artist', () => {
            const album = new Album({
                title: 'Obscured by Clouds',
                genre: 'rock',
                price: 15,
                totalSongs: 10
            });

            const { errors } = album.validateSync();
            expect(errors.artist.message).toEqual('Path `artist` is required.');
        });
    });

    describe('title', () => {
        it('requires a title', () => {
            const album = new Album({
                artist: 'Pink Floyd',
                genre: 'rock',
                price: 15,
                totalSongs: 10
            });

            const { errors } = album.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });

    describe('genre', () => {
        it('requires a genre', () => {
            const album = new Album({
                artist: 'Pink Floyd',
                title: 'Obscured by Clouds',
                price: 15,
                totalSongs: 10
            });

            const { errors } = album.validateSync();
            expect(errors.genre.message).toEqual('Path `genre` is required.');
        });
    });

    describe('price', () => {
        it('requires a price', () => {
            const album = new Album({
                artist: 'Pink Floyd',
                title: 'Obscured by Clouds',
                price: 15,
                totalSongs: 10
            });

            const { errors } = album.validateSync();
            expect(errors.price.message).toEqual('Path `price` is required.');
        });

        it('is over -1', () => {
            const album = new Album({
                artist: 'Pink Floyd',
                title: 'Obscured by Clouds',
                genre: 'rock',
                price: -1,
                totalSongs: 10
            });

            const { errors } = album.validateSync();
            expect(errors.price.message).toEqual('Path `price` (-1) is less than minimum allowed value (0).');
        });
    });

    describe('totalSongs', () => {
        it('requires totalSongs', () => {
            const album = new Album({
                artist: 'Pink Floyd',
                title: 'Obscured by Clouds',
                genre: 'rock',
                price: -1,
            });

            const { errors } = album.validateSync();
            expect(errors.totalSongs.message).toEqual('Path `totalSongs` is required.');
        });
    });
});
