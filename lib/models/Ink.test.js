const Ink = require('./Ink');

describe('Ink model', () => {
    describe('brand', () => {
        it('requires an brand', () => {
            const ink = new Ink({
                printType: 'relief',
                oilBased: false,
                toxic: false,
                color: 'Bone Black'
            });

            const { errors } = ink.validateSync();
            expect(errors.brand.message).toEqual('Path `brand` is required.');
        });
    });

    describe('printType', () => {
        it('requires an printType', () => {
            const ink = new Ink({
                brand: 'speedball',
                oilBased: false,
                toxic: false,
                color: 'Bone Black'
            });

            const { errors } = ink.validateSync();
            expect(errors.printType.message).toEqual('Path `printType` is required.');
        });
    });

    describe('oilBased', () => {
        it('requires an oilBased', () => {
            const ink = new Ink({
                brand: 'speedball',
                printType: 'relief',
                toxic: false,
                color: 'Bone Black'
            });

            const { errors } = ink.validateSync();
            expect(errors.oilBased.message).toEqual('Path `oilBased` is required.');
        });
    });

    describe('toxic', () => {
        it('requires an toxic', () => {
            const ink = new Ink({
                brand: 'speedball',
                printType: 'relief',
                oilBased: false,
                color: 'Bone Black'
            });

            const { errors } = ink.validateSync();
            expect(errors.toxic.message).toEqual('Path `toxic` is required.');
        });
    });

    describe('color', () => {
        it('requires an color', () => {
            const ink = new Ink({
                brand: 'speedball',
                printType: 'relief',
                oilBased: false,
                toxic: false,
            });

            const { errors } = ink.validateSync();
            expect(errors.color.message).toEqual('Path `color` is required.');
        });
    });
});
