const Port = require('../src/Port.js')

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('can dock a ship', () => {});
});

module.exports = Port;