const Headphones = require('./Headphones');

describe('Headphones model', () => {
    describe('brand', () => {
        it('requires an brand', () => {
            const headphones = new Headphones({
                bluetooth: true,
                microphone: true,
                price: 200,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.brand.message).toEqual('Path `brand` is required.');
        });
    });

    describe('bluetooth', () => {
        it('requires a bluetooth field', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                microphone: true,
                price: 200,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.bluetooth.message).toEqual('Path `bluetooth` is required.');
        });
    });

    describe('microphone', () => {
        it('requires a microphone field', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                bluetooth: true,
                price: 200,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.microphone.message).toEqual('Path `microphone` is required.');
        });
    });

    describe('price', () => {
        it('requires a price', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                bluetooth: true,
                microphone: true,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.price.message).toEqual('Path `price` is required.');
        });

        it('is over -1', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                bluetooth: true,
                microphone: true,
                price: 200,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.price.message).toEqual('Path `price` (-1) is less than minimum allowed value (0).');
        });

        it('is under 120001', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                bluetooth: true,
                microphone: true,
                price: 120001,
                style: 'Over-ear'
            });

            const { errors } = headphones.validateSync();
            expect(errors.price.message).toEqual('Path `price` (120001) is more than maximum allowed value (120000).');
        });
    });

    describe('style', () => {
        it('requires style', () => {
            const headphones = new Headphones({
                brand: 'Skullcandy',
                bluetooth: true,
                microphone: true,
                price: 200,
            });

            const { errors } = headphones.validateSync();
            expect(errors.style.message).toEqual('Path `style` is required.');
        });
    });
});
