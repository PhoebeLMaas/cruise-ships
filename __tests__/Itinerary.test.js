const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
  it('can be instantiated with an array of ports', () => {
    const port1 = new Port('Rotterdam');
    const port2 = new Port('Antwerp');
    const port3 = new Port('Hamburg');

    const ports = [port1, port2, port3];
    const itinerary = new Itinerary(ports);

    expect(itinerary.ports).toEqual(ports);
  });
});
