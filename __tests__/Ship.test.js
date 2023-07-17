const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  let port1, port2, itinerary, ship;

  beforeEach(() => {
    port1 = new Port('Port 1');
    port2 = new Port('Port 2');
    port3 = new Port('Port 3')
    itinerary = new Itinerary([port1, port2]);
    ship = new Ship(itinerary);
  });

  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Ship);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toBe(port1);
  });

  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBe(port2);
  });
  

  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(port1);
  });

  it('throws an error when trying to sail past the last port in the itinerary', () => {
    expect(() => {
      ship.setSail();
      ship.dock();
      ship.setSail();
    }).toThrowError('Cannot set sail from the last port of the itinerary');
  });

  
});
