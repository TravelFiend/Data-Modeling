const Bike = require('./Bike');

describe('Bike model', () => {
    describe('brand', () => {
        it('requires a brand', () => {
            const bike = new Bike({
                frameMaterial: 'Aluminum',
                spokes: 32,
                wheelSize: 29,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.brand.message).toEqual('Path `brand` is required.');
        });
    });

    describe('frameMaterial', () => {
        it('requires a frame material', () => {
            const bike = new Bike({
                brand: 'Yeti',
                spokes: 32,
                wheelSize: 29,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.frameMaterial.message).toEqual('Path `frameMaterial` is required.');
        });
    });

    describe('spokes', () => {
        it('is required', () => {
            const bike = new Bike({
                brand: 'Yeti',
                spokes: 32,
                wheelSize: 29,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.spokes.message).toEqual('Path `spokes` is required.');
        });

        it('is over 27', () => {
            const bike = new Bike({
                brand: 'Yeti',
                frameMaterial: 'steel',
                spokes: 32,
                wheelSize: 29,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.spokes.message).toEqual('Path `spokes` (27) is less than minimum allowed value (28).');
        });

        it('is under 144', () => {
            const bike = new Bike({
                brand: 'Yeti',
                frameMaterial: 'steel',
                spokes: 145,
                wheelSize: 29,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.spokes.message).toEqual('Path `spokes` (145) is more than maximum allowed value (144).');
        });
    });

    describe('wheelSize', () => {
        it('is required', () => {
            const bike = new Bike({
                brand: 'Yeti',
                frameMaterial: 'steel',
                spokes: 145,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.wheelSize.message).toEqual('Path `wheelSize` is required.');
        });

        it('is over 25', () => {
            const bike = new Bike({
                brand: 'Yeti',
                frameMaterial: 'steel',
                spokes: 145,
                wheelSize: 25,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.wheelSize.message).toEqual('Path `wheelSize` (25) is less than minimum allowed value (26).');
        });

        it('is under 30', () => {
            const bike = new Bike({
                brand: 'Yeti',
                frameMaterial: 'steel',
                spokes: 145,
                wheelSize: 30,
                saddle: 'leather'
            });

            const { errors } = bike.validateSync();
            expect(errors.wheelSize.message).toEqual('Path `wheelSize` (30) is more than maximum allowed value (29).');
        });
    });
});
